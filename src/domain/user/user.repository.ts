import { UserEntity } from "./user.entity";


export interface IUserRepository {
    create(user: UserEntity): Promise<UserEntity>;
    findById(email: string): any;
    findByEmail(id: string): any;
}