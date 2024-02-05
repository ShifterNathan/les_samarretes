import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginUserDTO } from '../users/dto/login-user.dto';
import { UsersService } from '../users/users.service';
import { JWTPayload } from './interfaces/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async registerUser(createUserDTO: CreateUserDto) {
    const responseDto = await this.usersService.create(createUserDTO);
    const { password, ...rest } = responseDto.data;

    return {
      ...rest,
      token: this.getJWTToken({
        email: rest._doc.email,
        firstName: rest._doc.firstName,
        roles: rest._doc.roles,
      }),
    };
  }

  async loginUser(loginUserDTO: LoginUserDTO) {
    const loginUser = await this.usersService.login(loginUserDTO);

    const { password, ...rest } = loginUser.data;

    return {
      ...rest,
      token: this.getJWTToken({
        email: rest._doc.email,
        firstName: rest._doc.firstName,
        roles: rest._doc.roles,
      }),
    };
  }

  private getJWTToken(payload: JWTPayload) {
    const token = this.jwtService.sign(payload);
    return token;
  }
}
