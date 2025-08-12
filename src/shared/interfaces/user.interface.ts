export interface UserProps {
    id?: string;
    username: string;
    email: string;
    password: string;
}
export interface RegisterUseCaseParams {
    id: string;
    username: string;
    email: string;
    password: string;
}