import { Inject } from "@nestjs/common";
import { UserEntity } from "src/domain/user/user.entity";
import { IUserRepository } from "src/domain/user/user.repository";
import { RegisterUserDto } from "src/presentation/auth/dto/auth.dto";
import { ApiResponse } from "src/shared/bases/api-response";

export class RegisterUseCase {
    constructor(@Inject('IUserRepository')
    private readonly userRepository: IUserRepository,
    ) { }

    async execute(data: RegisterUserDto): Promise<UserEntity | ApiResponse<UserEntity | null>> {
        try {
            const newUser = new UserEntity({
                username: data.username,
                email: data.email,
                password: data.password
            });
            return ApiResponse.created(
                await this.userRepository.create(newUser),
                'User registered successfully')
        } catch (error) {
            return ApiResponse.error(
                error.message || 'An error occurred while registering the user')
        }
    }
}