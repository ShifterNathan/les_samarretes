<<<<<<< HEAD
import { Test, TestingModule } from "@nestjs/testing";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { PaginationDTO } from "../common/dto/pagination.dto";
import { BadRequestException, ConflictException } from "@nestjs/common";
import { DataBaseException } from "../common/filters/database.exception";
import { UpdateUserDto } from "./dto/update-user.dto";
import { MOCKS } from "../common/mocks";

describe("UsersController", () => {
  let controller: UsersController;
  const { MOCK_USER_BUYER } = new MOCKS();
=======
import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;
>>>>>>> 0ddb4895ac0f33542e087aec6fcadb8742f52e52

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
<<<<<<< HEAD
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
      ],
=======
      providers: [UsersService],
>>>>>>> 0ddb4895ac0f33542e087aec6fcadb8742f52e52
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

<<<<<<< HEAD
  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  describe("create", () => {
    it("should create a new user", async () => {
      const createUserDto: CreateUserDto = {
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@example.com",
        password: "password",
      };

      const createdUser: User = MOCK_USER_BUYER;

      const usersService = { create: jest.fn().mockResolvedValue(createdUser) };
      const usersController = new UsersController(usersService as any);

      const result = await usersController.create(createUserDto);
      expect(result).toEqual(createdUser);
      expect(usersService.create).toHaveBeenCalledWith(createUserDto);
    });

    it("should throw ConflictException when creating a user with an existing email", async () => {
      const createUserDto: CreateUserDto = {
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@example.com",
        password: "password",
      };

      const usersService = {
        create: jest
          .fn()
          .mockRejectedValue(
            new ConflictException(
              `User with email ${createUserDto.email} already exists`
            )
          ),
      };
      const usersController = new UsersController(usersService as any);

      await expect(usersController.create(createUserDto)).rejects.toThrow(
        new ConflictException(
          `User with email ${createUserDto.email} already exists`
        )
      );
      expect(usersService.create).toHaveBeenCalledWith(createUserDto);
    });
  });

  describe("find", () => {
    it("should return users successfully", async () => {
      const paginationDto: PaginationDTO = {
        page: 1,
      };
      const search = "john";

      const mockUsers = [
        {
          id: "1",
          firstName: "John",
          lastName: "Doe",
          email: "johndoe@example.com",
        },
        {
          id: "2",
          firstName: "Jane",
          lastName: "Doe",
          email: "janedoe@example.com",
        },
      ];

      const usersService = {
        find: jest.fn().mockResolvedValue(mockUsers),
      };
      const usersController = new UsersController(usersService as any);

      const foundUsers = await usersController.find(paginationDto, search);
      expect(foundUsers).toEqual(mockUsers);
      expect(usersService.find).toHaveBeenCalledWith(paginationDto, search);
    });

    it("should return an empty array when no users are found", async () => {
      const paginationDto: PaginationDTO = {
        page: 1,
      };
      const search = "non-existent";

      const mockUsers = [];

      const usersService = {
        find: jest.fn().mockResolvedValue(mockUsers),
      };
      const usersController = new UsersController(usersService as any);

      const foundUsers = await usersController.find(paginationDto, search);
      expect(foundUsers).toEqual(mockUsers);
      expect(usersService.find).toHaveBeenCalledWith(paginationDto, search);
    });
  });

  describe("findOne", () => {
    it("should find one user by id", async () => {
      const mockUser: User = MOCK_USER_BUYER;

      const paginationDto: PaginationDTO = { page: 1 };

      const usersService = {
        findOne: jest.fn().mockResolvedValue(mockUser),
      };
      const usersController = new UsersController(usersService as any);

      const result = await usersController.findOne(mockUser.id, paginationDto);
      expect(result).toEqual(mockUser);
      expect(usersService.findOne).toHaveBeenCalledWith(mockUser.id, paginationDto);
    });

    it('should throw NotFoundException if user is not found', async () => {
      const userId = 'non-existent-user-id';
      const paginationDto: PaginationDTO = { page: 1 };
    
      const usersService = {
        findOne: jest.fn().mockImplementation(async () => {
          throw new DataBaseException(`User with id ${userId} not founded`, 404);
        }),
      };
      const usersController = new UsersController(usersService as any);
    
      await expect(
        usersController.findOne(userId, paginationDto)
      ).rejects.toThrowError(new DataBaseException(`User with id ${userId} not founded`, 404));
    
      expect(usersService.findOne).toHaveBeenCalledWith(userId, paginationDto);
    });
  });

  describe('update', () => {
    it('should update a user successfully', async () => {
      const updateUserDto: UpdateUserDto = { firstName: 'Updated' };
      const mockUser: User = MOCK_USER_BUYER;
  
      const usersService = {
        update: jest.fn().mockResolvedValue(mockUser),
      };
      const usersController = new UsersController(usersService as any);
  
      const result = await usersController.update(mockUser.id, updateUserDto, mockUser);
      expect(result).toEqual(mockUser);
      expect(usersService.update).toHaveBeenCalledWith(mockUser.id, updateUserDto, mockUser);
    });
  
    it('should throw NotFoundException if user is not found', async () => {
      const userId = 'non-existent-user-id';
      const updateUserDto: UpdateUserDto = { firstName: 'Updated' };
  
      const usersService = {
        update: jest.fn().mockImplementation(async () => {
          throw new DataBaseException(`User with id ${userId} not founded`, 404);
        }),
      };
      const usersController = new UsersController(usersService as any);
  
      await expect(
        usersController.update(userId, updateUserDto, undefined)
      ).rejects.toThrowError(new DataBaseException(`User with id ${userId} not founded`, 404));
  
      expect(usersService.update).toHaveBeenCalledWith(userId, updateUserDto, undefined);
    });

    it('should throw BadRequestException if update request is invalid', async () => {
      const updateUserDto: UpdateUserDto = { email: 'invalid_email' };
      const mockUser: User = MOCK_USER_BUYER
  
      const usersService = {
        update: jest.fn().mockImplementation(async () => {
          throw new BadRequestException(`Update request is invalid`);
        }),
      };
      const usersController = new UsersController(usersService as any);
  
      await expect(
        usersController.update(mockUser.id, updateUserDto, mockUser)
      ).rejects.toThrowError(new BadRequestException(`Update request is invalid`));
  
      expect(usersService.update).toHaveBeenCalledWith(mockUser.id, updateUserDto, mockUser);
    });
  });

  describe('remove', () => {
    it('should remove a user successfully', async () => {
      const userId = 'existing-user-id';
      const expectedMessage = `User with id ${userId} deleted`;
  
      const usersService = {
        remove: jest.fn().mockResolvedValue({ message: expectedMessage }),
      };
      const usersController = new UsersController(usersService as any);
  
      const result = await usersController.remove(userId);
      expect(result).toEqual({ message: expectedMessage });
      expect(usersService.remove).toHaveBeenCalledWith(userId);
    });
  
    it('should throw NotFoundException if user is not found', async () => {
      const userId = 'non-existent-user-id';
  
      const usersService = {
        remove: jest.fn().mockImplementation(async () => {
          throw new DataBaseException(`User with id ${userId} not founded`, 404);
        }),
      };
      const usersController = new UsersController(usersService as any);
  
      await expect(
        usersController.remove(userId)
      ).rejects.toThrowError(new DataBaseException(`User with id ${userId} not founded`, 404));
  
      expect(usersService.remove).toHaveBeenCalledWith(userId);
    });
  });
  
=======
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
>>>>>>> 0ddb4895ac0f33542e087aec6fcadb8742f52e52
});
