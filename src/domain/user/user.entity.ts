import { UserProps } from "src/shared/interfaces/user.interface";
export class UserEntity {
    public readonly id?: string;
    public username: string;
    public email: string;
    public password: string;


    constructor(props: UserProps) {
        this.id = props.id || undefined;
        this.username = props.username;
        this.email = props.email;
        this.password = props.password;
    }
}