import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { lastValueFrom, Observable, of } from 'rxjs';
import { User, Role } from 'src/app/users/users.interfaces';

@Component({
  selector: 'app-users-container',
  templateUrl: './users-container.component.html'
})
export class UsersContainerComponent implements OnInit {

  users: User[] = [];

  values: Role[] = [];

  private allUsers: User[] = [];

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
