import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { PrismaUserRepository } from 'src/infrastructure/database/repositories/user/user.repository.impl';
import { CreateUserUseCase } from 'src/use-case/user/create.user.use-case';

@Module({
  controllers: [UserController],
  providers: [
    CreateUserUseCase,
    {
      provide: 'IUserRepository',
      useClass: PrismaUserRepository,
    }
  ],
  exports: ['IUserRepository']
})
export class UserModule { }
