import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { PrismaAuthRepository } from 'src/infrastructure/database/repositories/auth/auth.repository.impl';
import { CreateUserUseCase } from 'src/use-case/user/create.user.use-case';
import { RegisterUseCase } from 'src/use-case/auth/register.auth.use-case';
import { UserModule } from '../user/user.module';

@Module({
  controllers: [AuthController],
  providers: [
    RegisterUseCase,
    {
      provide: 'IAuthRepository',
      useClass: PrismaAuthRepository,
    }
  ],
  imports: [UserModule],
})
export class AuthModule { }
