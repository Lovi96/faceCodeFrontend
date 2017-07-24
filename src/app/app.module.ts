import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {RegPageComponent} from './reg-page/reg-page.component';

import {FormsModule} from '@angular/forms';
import {UserService} from './services/user.service'


@NgModule({
  declarations: [
    AppComponent,
    RegPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
