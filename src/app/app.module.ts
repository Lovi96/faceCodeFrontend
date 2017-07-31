import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {RegPageComponent} from './components/reg-page/reg-page.component';
import {FormsModule} from '@angular/forms';
import {UserService} from './services/user.service'
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './components/login/login.component';
import {UserListComponent} from './components/user-list/user-list.component';
import {RelationshipService} from './services/relationship-service.service';
import {HttpWrapper} from "./services/http-wrapper.service";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    RegPageComponent,
    LoginComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [UserService, RelationshipService, HttpWrapper],
  bootstrap: [AppComponent]
})
export class AppModule {
}
