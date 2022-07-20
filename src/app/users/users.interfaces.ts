export enum Role {
    Developer = 1,
    BusinessAnalyst = 2
}

export interface User {
    name: string,
    surname: string,
    role: Role
}