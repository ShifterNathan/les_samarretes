import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDTO } from './dto/login-user.dto';
import { DataBaseException } from '../common/filters/database.exception';
import { PaginationDTO } from '../common/dto/pagination.dto';
import { ResponseDTO } from '../common/dto/response.dto';
import { ValidRoles } from '../auth/interfaces/validRoles';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) {}

  async create(createUserDto: CreateUserDto): Promise<ResponseDTO<any>> {
    try {
      createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
      createUserDto.email = createUserDto.email.toLowerCase().trim();

      const user = await this.usersRepository.save(
        instanceToPlain(createUserDto)
      );
      const response: ResponseDTO<any> = plainToInstance(ResponseDTO, {
        data: user,
      });
      return response;
    } catch (error) {
      if (error.code === '23505') {
        throw new DataBaseException('User with this email already exists', 400);
      }
    }
  }

  async find(paginationDto: PaginationDTO, search?: string): Promise<ResponseDTO<any>> {
    const {
      page = 1,
      withDeleted = false,
      orderColumnName = 'id',
      orderBy = 'ASC',
    } = paginationDto;

    const searchArray = search
      ? [
        { email: ILike(`%${search.trim()}%`) },
        { lastName: ILike(`%${search.trim()}%`) },
        { firstName: ILike(`%${search.trim()}%`) },
      ]
      : [];

    const [data, total] = await this.usersRepository.findAndCount({
      where: searchArray,
      withDeleted,
      skip: (page - 1) * +process.env.LIMIT,
      take: +process.env.LIMIT,
      order: { [orderColumnName]: orderBy },
    });

    if (!total) throw new DataBaseException(`Users not found`, 404);
    if (!data.length) throw new BadRequestException(`Page ${page} does not exist`);

    const response: ResponseDTO<any> = plainToInstance(ResponseDTO, {
      data,
      total,
      prev: page > 1 ? `/users?page=${page - 1}` : null,
      next: total / +process.env.LIMIT > page ? `/users?page=${page + 1}` : null,
    });
    return response;
  }

  async findOne(id: string, paginationDto: PaginationDTO): Promise<ResponseDTO<any>> {
    const { withDeleted = false } = paginationDto;
    const user = await this.usersRepository.findOne({
      where: { id },
      withDeleted,
    });
    if (!user) {
      throw new DataBaseException(`User with id ${id} not found`, 404);
    }
    const response: ResponseDTO<any> = plainToInstance(ResponseDTO, {
      data: user,
    });
    return response;
  }

  async update(id: string, updateUserDto: UpdateUserDto, user: User): Promise<ResponseDTO<User>> {

    let isValidPassword = undefined;
    let isAdmin = user.roles.includes(ValidRoles.userAdmin);

    if (id !== user.id && !isAdmin) throw new ForbiddenException("You don't have permission to perform this action")
    if (!Object.keys(updateUserDto).length) throw new BadRequestException('You must send at least one field to update');

    const { data } = await this.findOne(id, { withDeleted: false });
    const foundUser = data;

    if ((updateUserDto.currentPassword ||
      updateUserDto.email ||
      updateUserDto.password) && !isAdmin) {
      isValidPassword = await bcrypt.compare(
        updateUserDto.currentPassword ? updateUserDto.currentPassword : '',
        foundUser.password);
    }

    if (isValidPassword) {
      if (updateUserDto.password) {
        updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10)
      }
    } else if (isValidPassword === undefined) {
      if (isAdmin) {
        delete updateUserDto.password;
        delete updateUserDto.currentPassword;
      }
    } else if (!isValidPassword) {
      if (!isAdmin) {
        throw new ForbiddenException(`Password is not valid or it was not provided. 
        Please provide your current password if you want to change your email or password`);
      }
      else {
        delete updateUserDto.password;
        delete updateUserDto.currentPassword;
      }
    }

    const userToReturn = await this.usersRepository.save({
      ...foundUser,
      ...updateUserDto,
    });

    const response: ResponseDTO<User> = {
      data: plainToInstance(User, userToReturn),
      message: `User ${userToReturn.firstName} ${userToReturn.lastName} has been updated.
      If email was changed, you will need to Log In again with your new email.
      Please remember only a seller can change the password`
    }
    return response;
  }

  async remove(id: string): Promise<ResponseDTO<any>> {
    const { affected } = await this.usersRepository.softDelete({ id });
    if (!affected) {
      throw new DataBaseException(
        `User with id ${id} cannot be deleted, are you sure that this user exists?`,
        404
      );
    }
    const response: ResponseDTO<any> = { message: `User with id ${id} deleted` };
    return response;
  }

  async login(loginUserDTO: LoginUserDTO): Promise<ResponseDTO<any>> {
    const { email, password } = loginUserDTO;

    const user = await this.usersRepository.findOne({
      where: { email, deletedAt: null },
    });
    if (!user)
      throw new DataBaseException(`User with email ${email} not found`, 404);

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      throw new BadRequestException(`Password is not valid`);

    const response: ResponseDTO<any> = plainToInstance(ResponseDTO, {
      data: user,
    });
    return response;
  }
}
