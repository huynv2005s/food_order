import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infrastructure/database/prisma/prisma.service';
import { IUserRepository } from 'src/domain/user/user.repository';
import { UserEntity } from 'src/domain/user/user.entity';
import { IAuthRepository } from 'src/domain/auth/auth.repository';
import { RegisterUserDto } from 'src/presentation/auth/dto/auth.dto';

@Injectable()
export class PrismaAuthRepository implements IAuthRepository {
    constructor(private readonly prisma: PrismaService) { }

    // async register(user: RegisterUserDto): Promise<User> {
    //     const createdUser = await this.prisma.user.create({
    //         data: { ...user}
    //     });
    //     return new User({ ...createdUser });
    // }
    async login(): Promise<UserEntity[]> {
        return await this.prisma.users.findMany()
    }
    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.prisma.users.findFirst({
            where: {
                email,
                password
            }
        });
        if (!user) {
            return null;
        }
        return user;
    }
}