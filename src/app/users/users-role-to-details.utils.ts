import { Role } from "src/app/users/users.interfaces";

export class UserRoleToDetailsUtils {
    
    private static roleToDetailsMap = new Map<Role, any>([
        [Role.Developer, { desc: 'Developer', color: 'green' }],
        [Role.BusinessAnalyst, { desc: 'Business Analyst', color: 'purple' }]
    ]);
  
    static getIndicatorColor(role?: Role): string {
        if (!role) {
            return '';
        }
        
        const roleDetails = UserRoleToDetailsUtils.roleToDetailsMap.get(role);
        return roleDetails?.color || '';
    }

    static getRoleDescription(role?: Role): string {
        if (!role) {
            return '';
        }

        const roleDetails = UserRoleToDetailsUtils.roleToDetailsMap.get(role);
        return roleDetails?.desc;
    }
}