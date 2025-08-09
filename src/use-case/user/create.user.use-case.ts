import { UserEntity } from "src/domain/user/user.entity";
import { IUserRepository } from "src/domain/user/user.repository";
import { CreateUserDto, UserRole } from "src/presentation/user/dto/user.dto";

export class CreateUserUseCase {
    constructor(private readonly userRepository: IUserRepository) { }

    async execute(createUserDto: CreateUserDto): Promise<UserEntity> {
        const { username, email, password } = createUserDto;

        // Here you would typically hash the password before saving
        const user = new UserEntity({
            id: 'generated-id',
            username: username,
            role: UserRole.USER,
            email,
            password
        });

        return await this.userRepository.create(user);
    }
}