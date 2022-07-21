import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom, Observable, of } from 'rxjs';
import { User, Role } from 'src/app/users/users.interfaces';

@Injectable({
    providedIn: 'root',
  })
export class UsersDataService {

    private usersDataSource: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);

    private rolesDataSource: BehaviorSubject<Role[]> = new BehaviorSubject<Role[]>([]);

    users: Observable<User[]> = this.usersDataSource.asObservable();

    roles: Observable<Role[]> = this.rolesDataSource.asObservable();

    private allUsers: User[] = [];

    async fetchData(): Promise<void> {
        this.allUsers =  await lastValueFrom(this.getData());

        this.usersDataSource.next(this.allUsers);
        this.rolesDataSource.next(Array.from(new Set(this.allUsers.map((x: User) => x.role))));
    }

    filterByRole(role?: Role) {
        const data = role 
            ? this.allUsers.filter((x: User) => x.role === role) 
            : this.allUsers;

        this.usersDataSource.next(data);
    }

    private getData(): Observable<User[]> {
        return of([{
            name: 'Andrew',
            surname: 'Blachnicki',
            role: Role.Developer
        }, {
            name: 'John',
            surname: 'Appleseed',
            role: Role.Developer
        }, {
            name: 'Victor',
            surname: 'Cage',
            role: Role.Developer
        }, {
            name: 'Alicia',
            surname: 'Silverstone',
            role: Role.BusinessAnalyst
        }, {
            name: 'Victoria',
            surname: 'Carpenter',
            role: Role.Developer
        }, {
            name: 'Gustav',
            surname: 'Meyer',
            role: Role.BusinessAnalyst
        }
        ]);
    }
}
