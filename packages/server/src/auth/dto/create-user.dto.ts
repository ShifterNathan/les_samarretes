import { IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUserDTO {
    @IsEmail()
    @IsString()
    email: string;

    @IsString()
    @MinLength(6)
    @MaxLength(50)
    @Matches(
        /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'The password must have an Uppercase, lowercase letter and a number'
    })
    password: string;
    
    @IsString()
    fullName: string;

}