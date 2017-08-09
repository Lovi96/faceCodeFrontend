import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegPageComponent} from "./components/reg-page/reg-page.component"
import {LoginComponent} from "./components/login/login.component"
import {UserListComponent} from "./components/user-list/user-list.component"
import {MyGuard} from "./guards/can-active.guard";
import {ProfilePageComponent} from "./components/profile-page/profile-page.component";
import {ProfilePictureComponent} from "./components/profile-picture/profile-picture.component";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'reg', component: RegPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'friends', component: UserListComponent},// canActivate: [MyGuard]},
  {path: 'profile/:id', component: ProfilePageComponent},
  {path: 'profilepicture', component: ProfilePictureComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
