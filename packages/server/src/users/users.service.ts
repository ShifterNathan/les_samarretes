import { Injectable, BadRequestException, ForbiddenException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDTO } from './dto/login-user.dto';
import { DataBaseException } from '../common/filters/database.exception';
import { PaginationDTO } from '../common/dto/pagination.dto';
import { ResponseDTO } from '../common/dto/response.dto';
import { User, UserDocument } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<ResponseDTO<any>> {
    try {
      const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

      const newUser = new this.userModel({
        ...createUserDto,
        password: hashedPassword,
        email: createUserDto.email.toLowerCase().trim(),
        deletedAt: null,
      });
      const user = await newUser.save();

      const response: ResponseDTO<any> = plainToInstance(ResponseDTO, {
        message: 'User created successfully',
        data: user,
      });
      return response;
    } catch (error) {
      throw new DataBaseException('User with this email already exists', 400);
    }
  }

  async find(paginationDto: PaginationDTO, search?: string): Promise<ResponseDTO<any>> {
    const {
      page = 1,
      orderColumnName = 'createdAt',
      orderBy = 'asc',
    } = paginationDto;

    const queryCondition = search ? {
      $or: [
        { email: new RegExp(search.trim(), 'i') },
        { lastName: new RegExp(search.trim(), 'i') },
        { firstName: new RegExp(search.trim(), 'i') },
      ],
    } : {};

    const limit = +process.env.LIMIT || 10;
    const skip = (page - 1) * limit;

    const users = await this.userModel.find(queryCondition)
      .skip(skip)
      .limit(limit)
      .sort([[orderColumnName, orderBy]])
      .exec();

    const total = await this.userModel.countDocuments(queryCondition);

    const response: ResponseDTO<any> = plainToInstance(ResponseDTO, {
      users,
      total,
      prev: page > 1 ? `/users?page=${page - 1}` : null,
      next: total / +process.env.LIMIT > page ? `/users?page=${page + 1}` : null,
    });
    return response;
  }

  async findOne(email: string): Promise<UserDocument> {
    const user = await this.userModel.findOne({ email: email }).exec();
    if (!user) {
      throw new DataBaseException(`User with email ${email} not found`, 404);
    }
    return user;
  }

  async update(email: string, updateUserDto: UpdateUserDto, user: User): Promise<UserDocument> {
    if (updateUserDto.password) {
      updateUserDto.password = await bcrypt.hash(updateUserDto.password, 10);
    }
    if(updateUserDto.email) {
      const newMailExists = this.findOne(updateUserDto.email);
      if(newMailExists) {
        throw new DataBaseException(`User with email ${updateUserDto.email} already exists`, 400);
      }
      else {
        updateUserDto.email = updateUserDto.email.toLowerCase().trim();
      }
    }

    const updateObject = {
      ...updateUserDto,
      updatedAt: new Date(),
    }

    const updatedUser = await this.userModel.findOneAndUpdate({ email: email }, updateObject , { new: true }).exec();

    if (!updatedUser) {
      throw new DataBaseException(`User with email ${email} not found`, 404);
    }

    if(updatedUser.email !== user.email) {
      throw new ForbiddenException(`You are not allowed to update this user`);
    }
    
    return updatedUser;
  }

  async remove(email: string): Promise<void> {
    const result = await this.userModel.findOneAndUpdate({ email: email }, { deletedAt: new Date() }).exec();
    if (!result) {
      throw new DataBaseException(`User with id ${email} cannot be deleted, are you sure that this user exists?`, 404);
    }
  }

  async login(loginUserDTO: LoginUserDTO): Promise<ResponseDTO<any>> {
    const user = await this.userModel.findOne({ email: loginUserDTO.email, deletedAt: null }).exec();
    if (!user) {
      throw new DataBaseException(`User with email ${loginUserDTO.email} not found`, 404);
    }

    const isPasswordValid = await bcrypt.compare(loginUserDTO.password, user.password);
    if (!isPasswordValid) {
      throw new BadRequestException(`Password is not valid`);
    }

    return { data: user };
  }
}