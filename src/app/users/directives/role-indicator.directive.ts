import { Directive, HostBinding, Input } from "@angular/core";
import { UsersData } from "../users-data.const";
import { Role } from "../users.interfaces";

@Directive({
    selector: '[roleIndicator]',
    host: {
        '[style.border-left]':'"gray solid 9px"'
    }
})
export class RoleIndicatorDirective {

    @Input()
    set role(role: Role | undefined) {
        this.backgroundColor = role 
            ? UsersData.roleToDetailsMap.get(role)?.color 
            : '';
    }

    @HostBinding('style.border-left-color')
    backgroundColor: string = '';
}