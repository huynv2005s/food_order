import { PrismaService } from 'src/infrastructure/database/prisma/prisma.service';
import { Prisma } from '@prisma/client';

export class BaseRepository {
    constructor(protected readonly prisma: PrismaService) { }

    protected getDb(tx?: Prisma.TransactionClient) {
        return tx ?? this.prisma;
    }
}