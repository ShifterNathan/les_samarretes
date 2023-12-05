import { Test, TestingModule } from "@nestjs/testing";
import { UsersService } from "./users.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { ILike, Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { DataBaseException } from "../common/filters/database.exception";
import { PaginationDTO } from "../common/dto/pagination.dto";
import { plainToInstance } from "class-transformer";
import { ResponseDTO } from "../common/dto/response.dto";
import * as bcrypt from "bcrypt";
import { UpdateUserDto } from "./dto/update-user.dto";
import {
  BadRequestException,
  ForbiddenException,
  NotFoundException,
} from "@nestjs/common";
import { UpdateResult } from 'typeorm';
import { LoginUserDTO } from "./dto/login-user.dto";
import { MOCKS } from "../common/mocks";

describe("UsersService", () => {
  let service: UsersService;
  let userRepository: Repository<User>;
  const { MOCK_USER_BUYER, MOCK_USER_ADMIN } = new MOCKS();
  jest.mock("bcrypt", () => ({
    hash: jest.fn().mockResolvedValue("hashedPassword"),
    compare: jest.fn().mockResolvedValue(true) as jest.MockedFunction<
      (data: string, encrypted: string) => Promise<boolean>
    >,
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    userRepository = module.get(getRepositoryToken(User));
  });

  describe("create", () => {
    it("should create a new user", async () => {
      const createUserDto: CreateUserDto = {
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@example.com",
        password: "password",
      };

      const mockUser: User = MOCK_USER_BUYER;
      const expectedResult = mockUser;

      jest.spyOn(userRepository, "save").mockResolvedValueOnce(mockUser);

      const result = await service.create(createUserDto);

      expect(result.data).toEqual(expectedResult);
      expect(userRepository.save).toHaveBeenCalledTimes(1);
      expect(userRepository.save).toHaveBeenCalledWith(createUserDto);
    });

    it("should throw an error if a user with the same email already exists", async () => {
      const createUserDto: CreateUserDto = {
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@example.com",
        password: "password",
      };
      const expectedError = new DataBaseException(
        "User with this email already exists",
        400
      );

      jest
        .spyOn(userRepository, "save")
        .mockRejectedValueOnce({ code: "23505" });

      await expect(service.create(createUserDto)).rejects.toThrow(
        expectedError
      );
      expect(userRepository.save).toHaveBeenCalledTimes(1);
      expect(userRepository.save).toHaveBeenCalledWith(createUserDto);
    });
  });

  describe("find", () => {
    it("should return a list of users with valid search term", async () => {
      process.env.LIMIT = "10";
      const paginationDto: PaginationDTO = {
        page: 1,
        orderColumnName: "id",
        orderBy: "ASC",
        withDeleted: false,
      };
      const search = "johndoe";

      const mockUser: User = MOCK_USER_BUYER;

      const expectedResult = {
        data: [mockUser],
        total: 1,
        prev: null,
        next: null,
      };

      jest
        .spyOn(userRepository, "findAndCount")
        .mockResolvedValueOnce([[mockUser], 1]);

      const result = await service.find(paginationDto, search);

      expect(result).toEqual(expectedResult);
      expect(userRepository.findAndCount).toHaveBeenCalledTimes(1);
      expect(userRepository.findAndCount).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expect.arrayContaining([
            expect.objectContaining({ email: expect.any(Object) }),
            expect.objectContaining({ lastName: expect.any(Object) }),
            expect.objectContaining({ firstName: expect.any(Object) }),
          ]),
          withDeleted: false,
          skip: expect.any(Number),
          take: expect.any(Number),
          order: expect.any(Object),
        })
      );
    });

    it("should throw an error if no users are found", async () => {
      process.env.LIMIT = "10";
      const paginationDto = {
        page: 1,
        withDeleted: false,
        orderColumnName: "id",
      };

      const search = "non-existing-user";
      const expectedError = new DataBaseException("Users not found", 404);
      jest.spyOn(userRepository, "findAndCount").mockResolvedValueOnce([[], 0]);

      await expect(service.find(paginationDto, search)).rejects.toThrow(
        expectedError
      );
      expect(userRepository.findAndCount).toHaveBeenCalledTimes(1);
      expect(userRepository.findAndCount).toHaveBeenCalledWith({
        where: [
          { email: ILike(`%${search.trim()}%`) },
          { lastName: ILike(`%${search.trim()}%`) },
          { firstName: ILike(`%${search.trim()}%`) },
        ],
        withDeleted: false,
        skip: 0,
        take: 10,
        order: { id: "ASC" },
      });
    });
  });

  describe("findOne", () => {
    it("should return a user when given a valid id", async () => {
      const mockUser: User = MOCK_USER_BUYER
      const expectedResult = plainToInstance(ResponseDTO, {
        data: mockUser,
      });

      const paginationDto: PaginationDTO = {
        page: 1,
        orderColumnName: "id",
        orderBy: "ASC",
        withDeleted: false,
      };

      jest.spyOn(userRepository, "findOne").mockResolvedValueOnce(mockUser);

      const result = await service.findOne(mockUser.id, paginationDto);

      expect(result).toEqual(expectedResult);
      expect(userRepository.findOne).toHaveBeenCalledTimes(1);
      expect(userRepository.findOne).toHaveBeenCalledWith({
        where: { id: mockUser.id },
        withDeleted: false,
      });
    });

    it("should throw an error when given an invalid id", async () => {
      const userId = "invalid-id";
      const paginationDto: PaginationDTO = {
        page: 1,
        orderColumnName: "id",
        orderBy: "ASC",
        withDeleted: false,
      };
      const expectedError = new DataBaseException(
        `User with id ${userId} not found`,
        404
      );

      jest.spyOn(userRepository, "findOne").mockResolvedValueOnce(undefined);

      await expect(service.findOne(userId, paginationDto)).rejects.toThrow(
        expectedError
      );
      expect(userRepository.findOne).toHaveBeenCalledTimes(1);
      expect(userRepository.findOne).toHaveBeenCalledWith({
        where: { id: userId },
        withDeleted: false,
      });
    });
  });

  describe("update", () => {
    it("should update user successfully when the user updates their own information", async () => {
      const userId = "1";
      const updateUserDto: UpdateUserDto = {
        firstName: "UpdatedJohn",
        lastName: "UpdatedDoe",
        email: "updatedjohndoe@example.com",
        password: "updatedPassword1234",
        currentPassword: "password",
      };

      const mockUser: User = MOCK_USER_BUYER;

      const expectedResult = {
        message: `User UpdatedJohn UpdatedDoe has been updated.
      If email was changed, you will need to Log In again with your new email.
      Please remember only a seller can change the password`,
        data: {
          ...mockUser,
          ...updateUserDto,
          createdAt: mockUser.createdAt,
          updatedAt: mockUser.updatedAt,
        },
      };
      delete expectedResult.data.password;

      jest.spyOn(service, "findOne").mockResolvedValueOnce({ data: mockUser });
      jest
        .spyOn(userRepository, "save")
        .mockResolvedValueOnce({ ...mockUser, ...updateUserDto });
      jest
        .spyOn(bcrypt, "compare")
        .mockImplementationOnce(() => Promise.resolve(true));

      const result = await service.update(userId, updateUserDto, mockUser);

      expect(result).toEqual(expectedResult);
      expect(service.findOne).toHaveBeenCalledTimes(1);
      expect(userRepository.save).toHaveBeenCalledTimes(1);
      expect(bcrypt.compare).toHaveBeenCalledTimes(1);
    });

    it("should update user successfully when an admin user updates another user information", async () => {
      const userId = "1";
      const adminUser: User = MOCK_USER_ADMIN;

      const updateUserDto: UpdateUserDto = {
        firstName: "UpdatedJohn",
        lastName: "UpdatedDoe",
        email: "updatedjohndoe@example.com",
      };

      const mockUser: User = MOCK_USER_BUYER;

      const expectedResult = {
        message: `User UpdatedJohn UpdatedDoe has been updated.
      If email was changed, you will need to Log In again with your new email.
      Please remember only a seller can change the password`,
        data: {
          ...mockUser,
          ...updateUserDto,
          createdAt: mockUser.createdAt,
          updatedAt: mockUser.updatedAt,
        },
      };
      delete expectedResult.data.password;

      jest.spyOn(service, "findOne").mockResolvedValueOnce({ data: mockUser });
      jest
        .spyOn(userRepository, "save")
        .mockResolvedValueOnce({ ...mockUser, ...updateUserDto });

      const result = await service.update(userId, updateUserDto, adminUser);

      expect(result).toEqual(expectedResult);
      expect(service.findOne).toHaveBeenCalledTimes(1);
      expect(userRepository.save).toHaveBeenCalledTimes(1);
    });

    it("should not update user information when the user provides an incorrect current password", async () => {
      const updateUserDto: UpdateUserDto = {
        firstName: "UpdatedJohn",
        lastName: "UpdatedDoe",
        email: "updatedjohndoe@example.com",
        password: "updatedPassword1234",
        currentPassword: "incorrectCurrentPassword",
      };

      const mockUser: User = MOCK_USER_BUYER

      const userResponse: ResponseDTO<User> = {
        message: "User found",
        data: mockUser,
      };

      jest.spyOn(service, "findOne").mockResolvedValueOnce(userResponse);
      jest
        .spyOn(userRepository, "save")
        .mockResolvedValueOnce({ ...mockUser, ...updateUserDto });
      (bcrypt.compare as jest.Mock).mockResolvedValueOnce(false);

      await expect(
        service.update(mockUser.id, updateUserDto, mockUser)
      ).rejects.toThrow(
        new ForbiddenException(`Password is not valid or it was not provided. 
        Please provide your current password if you want to change your email or password`)
      );

      expect(service.findOne).toHaveBeenCalledTimes(1);
      expect(userRepository.save).toHaveBeenCalledTimes(0);
      expect(bcrypt.compare).toHaveBeenCalledTimes(1);
    });

    it("should not update user information when a non-admin user tries to update another user information", async () => {
      const updateUserDto = {
        firstName: "UpdatedJohn",
        lastName: "UpdatedDoe",
        email: "updatedjohndoe@example.com",
        currentPassword: "password",
        newPassword: "updatedPassword1234",
      };

      const mockUser: User = MOCK_USER_BUYER;

      const findOneSpy = jest.spyOn(userRepository, 'findOne').mockImplementationOnce(async () => {
        return mockUser;
      });
      jest.spyOn(userRepository, "save");
      

      await expect(
        service.update("2", updateUserDto, mockUser)
      ).rejects.toThrow(
        new ForbiddenException(
          "You don't have permission to perform this action"
        )
      );
      expect(userRepository.save).toHaveBeenCalledTimes(0);
    });

    it('should throw NotFoundException when trying to update a non-existent user', async () => {
      const userId = 'non-existent-id';
      const updateUserDto: UpdateUserDto = {
        firstName: 'UpdatedJohn',
        lastName: 'UpdatedDoe',
        email: 'updatedjohndoe@example.com',
        currentPassword: 'password',
      };
    
      const mockUser: User = MOCK_USER_ADMIN;
    
      jest.spyOn(userRepository, 'findOne').mockImplementation(async () => {
        return undefined;
      });
      
      jest.spyOn(userRepository, 'save');
    
      await expect(service.update(userId, updateUserDto, mockUser)).rejects.toThrow(
        new NotFoundException(`User with id ${userId} not found`)
      );
    
      expect(userRepository.save).toHaveBeenCalledTimes(0);
    });
    
  });

  describe("remove", () => {
    it('should remove an existing user successfully', async () => {
      const mockUser: User = MOCK_USER_BUYER
    
      jest.spyOn(userRepository, 'findOne').mockImplementation(async () => {
        return mockUser;
      });
    
      jest.spyOn(userRepository, 'softDelete').mockImplementation(async (): Promise<UpdateResult> => {
        return {
          raw: [],
          affected: 1,
          generatedMaps: [],
        };
      });
    
      const expectedMessage = `User with id ${mockUser.id} deleted`;
      const removedUserMessage = await service.remove(mockUser.id);
      expect(removedUserMessage).toEqual({ message: expectedMessage });
      expect(userRepository.softDelete).toHaveBeenCalledTimes(1);
    }); 

    it('should throw NotFoundException when trying to remove a non-existent user', async () => {
      const userId = 'non-existent-id';
    
      jest.spyOn(userRepository, 'findOne').mockImplementation(async () => {
        return undefined;
      });
    
      jest.spyOn(userRepository, 'softDelete').mockImplementation(async (): Promise<UpdateResult> => {
        return {
          raw: [],
          affected: 0,
          generatedMaps: [],
        };
      });
    
      jest.spyOn(userRepository, 'remove');
    
      await expect(service.remove(userId)).rejects.toThrow(
        new NotFoundException(`User with id non-existent-id cannot be deleted, are you sure that this user exists?`)
      );
    
      expect(userRepository.remove).toHaveBeenCalledTimes(0);
    });  
  });

  describe("login", () => {
    it('should log in the user successfully', async () => {
      const mockUser: User = MOCK_USER_BUYER;
    
      const loginUserDTO: LoginUserDTO = {
        email: mockUser.email,
        password: mockUser.password,
      };
    
      jest.spyOn(userRepository, 'findOne').mockImplementation(async () => mockUser);
      jest.spyOn(bcrypt, 'compare').mockImplementation(async () => true);
    
      const loginResponse = await service.login(loginUserDTO);
      expect(loginResponse.data).toEqual(mockUser);
    });

    it('should throw BadRequestException when login credentials are invalid', async () => {
      
      const mockUser: User = MOCK_USER_BUYER;
      
      const loginUserDTO: LoginUserDTO = {
        email: mockUser.email,
        password: 'wrong_password',
      };

      jest.spyOn(userRepository, 'findOne').mockImplementation(async () => mockUser);
      jest.spyOn(bcrypt, 'compare').mockImplementation(async () => false);
    
      await expect(service.login(loginUserDTO)).rejects.toThrow(
        new BadRequestException(`Password is not valid`)
      );
    });
    
  })
});
