export class User {
    constructor(
        public readonly id: string,
        public name: string,
        public role: string,
        public email: string,
        public password: string,
    ) { }
}