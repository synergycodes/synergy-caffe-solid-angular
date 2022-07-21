import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatSelectModule } from "@angular/material/select";
import { FiltersContainerComponent } from "./containers/filters/filters.component";
import { UserCardComponent } from "./components/user-card/user-card.component";
import { UsersContainerComponent } from "./users-container.component";

@NgModule({
    declarations: [
        UserCardComponent,
        UsersContainerComponent,
        FiltersContainerComponent
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