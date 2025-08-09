import { IsString } from "class-validator";
export enum UserRole {
    USER = "USER",
    ADMIN = "ADMIN",
    CUSTOMER = "CUSTOMER",
    DRIVER = "DRIVER"
}
export class CreateUserDto {
    @IsString()
    name: string;
    @IsString()
    email: string;
    @IsString()
    password: string;
    @IsString()
    role: UserRole;
}
