import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseFilters,
  ParseUUIDPipe,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RequestFilter } from '../common/filters/request.filter';
import { PaginationDTO } from '../common/dto/pagination.dto';
import { ValidRoles } from '../auth/interfaces/validRoles';
import { Auth } from '../auth/decorators/auth.decorator';
import { GetUser } from '../auth/decorators/get-user.decorator';
import { User } from './entities/user.entity';
import { ApiBearerAuth, ApiCreatedResponse, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ResponseDTO } from '../common/dto/response.dto';

@ApiBearerAuth()
@ApiTags('Users')
@UseFilters(new RequestFilter())
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiCreatedResponse({description: 'Objeto, data de User', type: ResponseDTO, status: 201})
  @ApiResponse({status: 400, description: 'Bad Request + mensaje de error'})  
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Auth(ValidRoles.userAdmin)
  @Get()
  @ApiQuery({ name: "search", required: false })
  @ApiResponse({status: 200, description: 'Objeto user/s', type: ResponseDTO})
  @ApiResponse({status: 400, description: 'Bad Request + mensaje de error'})
  @ApiResponse({status: 401, description: 'Unauthorized'})
  @ApiResponse({status: 403, description: 'Forbidden token related + mensaje de error'})
  find(@Query() paginationDto: PaginationDTO, @Query('search', ) search: string) {
    return this.usersService.find(paginationDto, search);
  }

  @Get(':id')
  @ApiQuery({ name: "search", required: false })
  @ApiResponse({status: 200, description: 'Objeto user', type: ResponseDTO})
  @ApiResponse({status: 400, description: 'Bad Request + mensaje de error'})
  @ApiResponse({status: 404, description: 'Not Found User'})
  findOne(
    @Param('id', ParseUUIDPipe) id: string,
    @Query() paginationDto: PaginationDTO,
  ) {
    return this.usersService.findOne(id, paginationDto);
  }

  @Auth()
  @Patch(':id')
  @ApiResponse({status: 200, description: 'Objeto user actualizado', type: ResponseDTO})
  @ApiResponse({status: 400, description: 'Bad Request + mensaje de error'})
  @ApiResponse({status: 401, description: 'Unauthorized + mensaje de error'})
  @ApiResponse({status: 404, description: 'Not Found User'})
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateUserDto: UpdateUserDto,
    @GetUser() user: User,
  ) {
    return this.usersService.update(id, updateUserDto, user);
  }

  @Auth(ValidRoles.userAdmin)
  @Delete(':id')
  @ApiResponse({status: 200, description: 'Objeto user eliminado'})
  @ApiResponse({status: 400, description: 'Bad Request + mensaje de error'})
  @ApiResponse({status: 401, description: 'Unauthorized'})
  @ApiResponse({status: 403, description: 'Bad Request + mensaje de error'})
  @ApiResponse({status: 404, description: 'Not Found User + mensaje de error'})
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.usersService.remove(id);
  }
}
