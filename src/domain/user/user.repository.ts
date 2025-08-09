import { User } from "./user.entity";


export interface IUserRepository {
    create(user: User): Promise<User>;
    findById(email: string): any;
    findByEmail(id: string): any;
}