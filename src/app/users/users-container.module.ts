import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatSelectModule } from "@angular/material/select";
import { FiltersContainerComponent } from "./containers/filters/filters.component";
import { UserCardComponent } from "./components/user-card/user-card.component";
import { UsersContainerComponent } from "./users-container.component";
import { RoleDescriptionPipe } from "./pipes/role-description.pipe";
import { RoleIndicatorDirective } from "./directives/role-indicator.directive";

@NgModule({
    declarations: [
        UserCardComponent,
        UsersContainerComponent,
        FiltersContainerComponent,
        RoleIndicatorDirective,
        RoleDescriptionPipe
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatGridListModule,
        MatSelectModule
    ],
    exports: [
        UsersContainerComponent
    ]
})
export class UsersContainerModule { }