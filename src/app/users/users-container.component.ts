import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/users/users.interfaces';
import { UsersDataService } from './users-data.service';

@Component({
  selector: 'app-users-container',
  templateUrl: './users-container.component.html'
})
export class UsersContainerComponent implements OnInit {

    users$: Observable<User[]>;

    constructor(private usersDataService: UsersDataService) {
        this.users$ = this.usersDataService.users;
    }

    async ngOnInit() {
        await this.usersDataService.fetchData();
    }
}
