import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/infrastructure/database/prisma/prisma.service';
import { IUserRepository } from 'src/domain/user/user.repository';
import { User } from 'src/domain/user/user.entity';
import { CreateUserDto } from 'src/presentation/user/dto/user.dto';

@Injectable()
export class PrismaUserRepository implements IUserRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(user: any): Promise<User> {
        const createdUser = await this.prisma.user.create({
            data: { ...user }
        });
        return createdUser
    }
    async findById(id: string) {
        const user = await this.prisma.user.findUnique({
            where: { id }
        });
        if (!user) { new NotFoundException(`User with id ${id} not found`); }
        return user
    }
    async findByEmail(email: string) {
        const user = await this.prisma.user.findFirst({
            where: { email }
        });
        if (!user) { new NotFoundException(`User with id ${email} not found`); }
        return user
    }

}