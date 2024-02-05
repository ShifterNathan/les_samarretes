import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class LoginUserDTO {

    @IsString()
    @IsNotEmpty()
        @ApiProperty({description: 'Correo del usuario', example: 'juan@correo.com'})
    email: string;

    @IsString()
    @MinLength(8)
        @ApiProperty({description: 'Correo del usuario', example: 'juan@correo.com'})
    password: string;

}