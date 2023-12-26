import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty( {description: 'Nombre del usuario', example: 'Juan' })
  @IsString()
  @IsOptional()
  firstName?: string;

  @ApiProperty({description: 'Apellido del usuario', example: 'Perez' })
  @IsString()
  @IsOptional()
  lastName?: string;

  @ApiProperty({description: 'Correo del usuario', example: 'Juan@correo.com', uniqueItems: true})
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({description: 'Clave del usuario', example: '12345678' })
  @IsString()
  @MinLength(8)
  @IsOptional()
  password?: string;

  @ApiProperty({description: 'Clave actual del usuario', example: '12345678' })
  @IsString()
  @MinLength(8)
  @IsOptional()
  currentPassword?: string;
}
