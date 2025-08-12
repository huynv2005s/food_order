import { users, UserStatus } from '@prisma/client';
import { UserEntity } from 'src/domain/user/user.entity';

export class UserMapper {
    static toDomain(prismaUser: users): UserEntity {
        return new UserEntity({
            id: prismaUser.id,
            username: prismaUser.username,
            email: prismaUser.email,
            password: prismaUser.password
        });
    }

    static toPrisma(domainUser: UserEntity): Pick<users, 'username' | 'email' | 'password'> {
        return {
            username: domainUser.username,
            email: domainUser.email,
            password: domainUser.password,
        };
    }
}