import { IsEmail, IsString } from "class-validator";

export class RegisterUserDto {
    @IsString()
    name: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    password: string;
}
export class LoginUserDto {
    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    password: string;
}