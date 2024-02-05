import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty( {description: 'Nombre del usuario', example: 'Juan' })
  @IsString()
  @MinLength(3)
  firstName: string;


  @IsString()
  @MinLength(3)
    @ApiProperty({description: 'Apellido del usuario', example: 'Perez' })
  lastName: string;


  @IsString()
  @IsEmail()
    @ApiProperty({description: 'Correo del usuario', example: 'Juan@correo.com', uniqueItems: true})
  email: string;

  @IsString()
  @MinLength(8)
    @ApiProperty({description: 'Clave del usuario', example: '12345678' })
  password: string;
}
