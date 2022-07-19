import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { lastValueFrom, Observable, of } from 'rxjs';
import { Role, User } from './app.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
    title = 'synergy-cafe-solid-angular';

    users: User[] = [];

    values: Role[] = [];

    private allUsers: User[] = [];

    private roleToDetailsMap = new Map<Role, any>([
        [Role.Developer, { desc: 'Developer', color: 'green' }],
        [Role.BusinessAnalyst, { desc: 'Business Analyst', color: 'purple' }]
    ]);

    async ngOnInit() {
        this.allUsers =  await lastValueFrom(this.getData());
        this.users = this.allUsers;
        this.values = Array.from(new Set(this.users.map((x: User) => x.role)));
    }

    selectionChange(event: MatSelectChange ): void {
        this.users = event.value 
            ? this.allUsers.filter((x: User) => x.role === event.value) 
            : this.allUsers;
    }

    getIndicatorColor(role: Role): string {
        const roleDetails = this.roleToDetailsMap.get(role);
        return roleDetails?.color || '';
    }

    getRoleDescription(role: Role): string {
        const roleDetails = this.roleToDetailsMap.get(role);
        return roleDetails?.desc;
    }
    
    private getData(): Observable<User[]> {
        return of([{
                name: 'Andrew',
                surname: 'Blachnicki',
                role: Role.Developer
            } ,{
                name: 'John',
                surname: 'Appleseed',
                role: Role.Developer
            },{
                name: 'Victor',
                surname: 'Cage',
                role: Role.Developer
            },{
                name: 'Alicia',
                surname: 'Silverstone',
                role: Role.BusinessAnalyst
            },{
                name: 'Victoria',
                surname: 'Carpenter',
                role: Role.Developer
            },{
                name: 'Gustav',
                surname: 'Meyer',
                role: Role.BusinessAnalyst
            }
        ]);
    }
}
