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
import {CompactUserVievComponent} from './components/compact-user-viev/compact-user-viev.component';
import {MyGuard} from "./guards/can-active.guard";
import {ProfilePageComponent} from './components/profile-page/profile-page.component';
import { ProfilePagePostComponent } from './components/profile-page-post/profile-page-post.component';
import {ProfilePagePostService} from "./services/profile-page-post.service";


@NgModule({
  declarations: [
    AppComponent,
    RegPageComponent,
    LoginComponent,
    UserListComponent,
    CompactUserVievComponent,
    ProfilePageComponent,
    ProfilePagePostComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [UserService, RelationshipService, HttpWrapper, MyGuard, ProfilePagePostService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
