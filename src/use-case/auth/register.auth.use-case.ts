import { Inject } from "@nestjs/common";
import { UserEntity } from "src/domain/user/user.entity";
import { IUserRepository } from "src/domain/user/user.repository";
import { RegisterUserDto } from "src/presentation/auth/dto/auth.dto";
import { UserRole } from "src/presentation/user/dto/user.dto";

export class RegisterUseCase {
    constructor(@Inject('IUserRepository')
    private readonly userRepository: IUserRepository,
    ) { }

    async execute(data: RegisterUserDto): Promise<unknown> {
        const newUser = new UserEntity({
            id: 'generated-id',
            username: data.username,
            role: UserRole.USER,
            email: data.email,
            password: data.password
        });
        return await this.userRepository.create(newUser);
    }
}