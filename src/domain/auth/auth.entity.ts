export class Auth {
    constructor(
        public readonly id: string,
        public name: string,
        public email: string,
        public passwordHash: string,
        public refreshToken?: string,
        public refreshTokenExpiry?: Date,
    ) { }
}