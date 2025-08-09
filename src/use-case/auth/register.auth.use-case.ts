import { Inject } from "@nestjs/common";
import { IAuthRepository } from "src/domain/auth/auth.repository";
import { User } from "src/domain/user/user.entity";
import { IUserRepository } from "src/domain/user/user.repository";
import { RegisterUserDto } from "src/presentation/auth/dto/auth.dto";

export class RegisterUseCase {
    constructor(@Inject('IUserRepository')
    private readonly userRepository: IUserRepository,
    ) { }

    async execute(data: RegisterUserDto): Promise<unknown> {
        const newUser = new User("id", data.name, "USER", data.email, data.password);
        return await this.userRepository.create(newUser);
    }
}