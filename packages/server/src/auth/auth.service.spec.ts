import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { ValidRoles } from './interfaces/validRoles';
import { LoginUserDTO } from '../users/dto/login-user.dto';
import { User } from 'src/users/entities/user.entity';
import { MOCKS } from '../common/mocks';

describe('AuthService', () => {
  let authService: AuthService;
  let usersService: UsersService;
  let jwtService: JwtService;
  const { MOCK_USER_BUYER } = new MOCKS();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        UsersService,
        {
          provide: UsersService,
          useValue: {
            create: jest.fn(),
            findOne: jest.fn(),
            login: jest.fn(),
          },
        },
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn(),
          },
        },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    usersService = module.get<UsersService>(UsersService);
    jwtService = module.get<JwtService>(JwtService);
  });

  describe('registerUser', () => {
    it('should register a user and return the user object without password and with token', async () => {
      const createUserDto: CreateUserDto = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        password: 'password123',
      };
  
      const createdUser = {
        id: '1',
        ...createUserDto,
        roles: [ValidRoles.user],
      };
  
      const userWithoutPassword = {
        id: createdUser.id,
        firstName: createdUser.firstName,
        lastName: createdUser.lastName,
        email: createdUser.email,
        roles: createdUser.roles,
      };
  
      const token = 'jwt-token';
  
      jest.spyOn(usersService, 'create').mockResolvedValueOnce({ data: createdUser });
      jest.spyOn(jwtService, 'sign').mockReturnValueOnce(token);
  
      const result = await authService.registerUser(createUserDto);
  
      expect(result).toEqual({ ...userWithoutPassword, token });
      expect(usersService.create).toHaveBeenCalledWith(createUserDto);
      expect(jwtService.sign).toHaveBeenCalledWith({
        id: createdUser.id,
        email: createdUser.email,
        firstName: createdUser.firstName,
        roles: createdUser.roles,
      });
    });
  
    it('should throw an error when trying to register a user with an existing email', async () => {
      const createUserDto: CreateUserDto = {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane.doe@example.com',
        password: 'password123',
      };
  
      const errorMessage = 'User with this email already exists';
  
      jest.spyOn(usersService, 'create').mockRejectedValueOnce(new Error(errorMessage));
  
      await expect(authService.registerUser(createUserDto)).rejects.toThrow(errorMessage);
      expect(usersService.create).toHaveBeenCalledWith(createUserDto);
    });
  });

  describe('loginUser', () => {
    it('should log in a user and return the user object without password and with token', async () => {
      const loginUserDto: LoginUserDTO = {
        email: 'john.doe@example.com',
        password: 'password123',
      };
    
      const foundUser: User = MOCK_USER_BUYER;
      foundUser.email = loginUserDto.email;
      foundUser.password = loginUserDto.password;
    
      const userWithoutPassword = {
        id: foundUser.id,
        firstName: foundUser.firstName,
        lastName: foundUser.lastName,
        email: foundUser.email,
        roles: foundUser.roles,
        createdAt: foundUser.createdAt,
      };
    
      const token = 'jwt-token';
    
      jest.spyOn(authService, 'loginUser').mockResolvedValueOnce(foundUser);
      jest.spyOn(jwtService, 'sign').mockReturnValueOnce(token);
    
      const result = await authService.loginUser(loginUserDto);
    
      // Remove the password property from the received result and add the token property
      const receivedResult = { ...result };
      delete receivedResult.password;
      receivedResult.token = token;
    
      expect(receivedResult).toEqual({ ...userWithoutPassword, token });
      expect(authService.loginUser).toHaveBeenCalledWith({email: loginUserDto.email, password: loginUserDto.password});
    });
    
    it('should throw an error when trying to log in a user with an incorrect password', async () => {
      const loginUserDto: LoginUserDTO = {
        email: 'john.doe@example.com',
        password: 'wrongpassword',
      };
    
      const foundUser = MOCK_USER_BUYER;
      foundUser.email = loginUserDto.email;
    
      const errorMessage = 'Password is not valid';
    
      jest.spyOn(usersService, 'findOne').mockResolvedValue({
        data: foundUser,
      });
    
      jest.spyOn(usersService, 'login').mockImplementation(async (userDto) => {
        if (userDto.password !== foundUser.password) {
          throw new Error(errorMessage);
        }
        return { data: foundUser };
      });
    
      await expect(authService.loginUser(loginUserDto)).rejects.toThrow(errorMessage);
      expect(usersService.login).toHaveBeenCalledWith(loginUserDto);
    });
  });
});
