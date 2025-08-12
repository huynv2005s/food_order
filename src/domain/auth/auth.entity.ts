export interface AuthProps {
    userId: string;
    email: string;
    passwordHash: string;
    refreshToken?: string;
    refreshTokenExpiry?: Date;
}

export class AuthEntity {
    public readonly userId: string;
    public email: string;
    public passwordHash: string;
    public refreshToken?: string;
    public refreshTokenExpiry?: Date;

    constructor(props: AuthProps) {
        this.userId = props.userId;
        this.email = props.email;
        this.passwordHash = props.passwordHash;
        this.refreshToken = props.refreshToken;
        this.refreshTokenExpiry = props.refreshTokenExpiry;
    }
}