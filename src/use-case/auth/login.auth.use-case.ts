import { Inject } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserEntity } from "src/domain/user/user.entity";
import { IUserRepository } from "src/domain/user/user.repository";
import { LoginUserDto, RegisterUserDto } from "src/presentation/auth/dto/auth.dto";
import { ApiResponse } from "src/shared/bases/api-response";

export class LoginUseCase {
    constructor(@Inject('IUserRepository')
    private readonly userRepository: IUserRepository,
        private jwtService: JwtService
    ) { }

    async execute(data: any): Promise<unknown> {
        try {
            const payload = { username: data.email, sub: data.id };
            const user = {
                access_token: this.jwtService.sign(payload),
            };
            return ApiResponse.created(
                user,
                'Đăng nhập thành công')
        } catch (error) {
            return ApiResponse.error(
                error.message || 'An error occurred while registering the user')
        }
    }
}