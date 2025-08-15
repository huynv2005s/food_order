import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException, Inject } from '@nestjs/common';
import { IAuthRepository } from 'src/domain/auth/auth.repository';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(
        @Inject('IAuthRepository') private readonly authUseCase: IAuthRepository
    ) {
        super({
            usernameField: 'email',
            passwordField: 'password'
        });
    }

    async validate(username: string, password: string): Promise<any> {
        const user = await this.authUseCase.validateUser(username, password);
        if (!user) throw new UnauthorizedException('Invalid credentials');
        return user;
    }
}
