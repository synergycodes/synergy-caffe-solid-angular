import { UsersContainerModule } from './users/users-container.module';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    UsersContainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
