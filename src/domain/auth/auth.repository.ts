import { users } from "@prisma/client";


export interface IAuthRepository {
    validateUser(username: string, password: string): Promise<any>;
    // register(user: { email: string, password: string, name: string }): Promise<User>;
    // login(user: { email: string, password: string }): Promise<unknown>;
}