import { UserProps } from "src/shared/interfaces/user.interface";
export class UserEntity {
    public readonly id: string;
    public username: string;
    public role: string;
    public email: string;
    public password: string;
    constructor(props: UserProps) {
        this.id = props.id;
        this.username = props.username;
        this.role = props.role;
        this.email = props.email;
        this.password = props.password;
    }
}