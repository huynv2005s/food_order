import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegisterUserDto } from './dto/auth.dto';
import { RegisterUseCase } from 'src/use-case/auth/register.auth.use-case';

@Controller('auth')
export class AuthController {
  constructor(private readonly register: RegisterUseCase) { }

  @Post('register')
  signup(@Body() data: RegisterUserDto) {
    return this.register.execute(data);
  }

  @Post('login')
  signin(@Body() data: RegisterUserDto) {
    return this.register.execute(data);
  }


}
