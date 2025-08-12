import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/infrastructure/database/prisma/prisma.service';
import { IUserRepository } from 'src/domain/user/user.repository';
import { UserEntity } from 'src/domain/user/user.entity';
import { CreateUserDto } from 'src/presentation/user/dto/user.dto';
import { UserMapper } from '../../mappers/user.mapper';
import { Prisma } from '@prisma/client';
import { BaseRepository } from 'src/shared/bases/base.repository';

@Injectable()
export class PrismaUserRepository extends BaseRepository implements IUserRepository {
    constructor(protected readonly prisma: PrismaService) {
        super(prisma);
    }

    async create(
        user: CreateUserDto,
        tx?: Prisma.TransactionClient
    ): Promise<UserEntity> {
        // const db = this.getDb(tx);
        const created = await this.getDb(tx).users.create({
            data: UserMapper.toPrisma(user),
        });
        return UserMapper.toDomain(created);
    }
    async findById(id: string) {
        const user = await this.prisma.users.findUnique({
            where: { id }
        });
        if (!user) { new NotFoundException(`User with id ${id} not found`); }
        return user
    }
    async findByEmail(email: string, tx?: Prisma.TransactionClient) {
        const user = await this.getDb(tx).users.findUnique({
            where: { email }
        });
        if (!user) { new NotFoundException(`User with id ${email} not found`); }
        return user ? UserMapper.toDomain(user) : null;
    }

}