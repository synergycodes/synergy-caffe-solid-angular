import { Component, Input } from '@angular/core';
import { User } from 'src/app/users/users.interfaces';
import { UserRoleToDetailsUtils } from '../../users-role-to-details.utils';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {

  @Input()
  item?: User;

  getIndicatorColor = UserRoleToDetailsUtils.getIndicatorColor;

  getRoleDescription =  UserRoleToDetailsUtils.getRoleDescription;
}
