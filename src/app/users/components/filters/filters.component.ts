import { Role } from '../../users.interfaces';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { UserRoleToDetailsUtils } from '../../users-role-to-details.utils';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersContainerComponent {

  @Input()
  values: Role[] = [];

  @Output()
  valueChange = new EventEmitter<MatSelectChange>();

  getRoleDescription = UserRoleToDetailsUtils.getRoleDescription;
}
