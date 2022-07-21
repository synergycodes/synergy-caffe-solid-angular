import { Role } from '../../users.interfaces';
import { Component } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { UsersData } from '../../users-data.const';
import { UsersDataService } from '../../users-data.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss']
})
export class FiltersContainerComponent {

    values$: Observable<Role[]>;

    constructor(private usersDataService: UsersDataService) {
        this.values$ = this.usersDataService.roles;
    }

    valueChange(event: MatSelectChange) {
        this.usersDataService.filterByRole(event.value);
    }
}
