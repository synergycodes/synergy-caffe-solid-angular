import { Pipe, PipeTransform } from "@angular/core";
import { UsersData } from "../users-data.const";
import { Role } from "../users.interfaces";

@Pipe({name: 'roleDescription'})
export class RoleDescriptionPipe implements PipeTransform {
    
    transform(role?: Role): string {
        if (!role) {
            return '';
        }
        
        const roleDetails = UsersData.roleToDetailsMap.get(role);
        return roleDetails?.desc || '';
    }
}