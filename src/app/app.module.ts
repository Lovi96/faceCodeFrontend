import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {AppComponent} from './app.component';
import {RegPageComponent} from './components/reg-page/reg-page.component';
import {FormsModule} from '@angular/forms';
import {UserService} from './services/user.service'
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    RegPageComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
