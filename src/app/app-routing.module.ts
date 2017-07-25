import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegPageComponent} from "./components/reg-page/reg-page.component"
import {LoginComponent} from "./login/login.component"

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'reg', component: RegPageComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
