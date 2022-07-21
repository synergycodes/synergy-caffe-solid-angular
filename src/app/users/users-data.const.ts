import { Role } from "src/app/users/users.interfaces";

export class UsersData {
    
    static roleToDetailsMap = new Map<Role, any>([
        [Role.Developer, { desc: 'Developer', color: '#49817B' }],
        [Role.BusinessAnalyst, { desc: 'Business Analyst', color: '#622376' }]
    ]);
}