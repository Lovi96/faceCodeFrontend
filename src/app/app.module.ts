import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {RegPageComponent} from './reg-page/reg-page.component';
import {TestComponent} from './test/test.component';

import {TestService} from './services/test.service';

@NgModule({
  declarations: [
    AppComponent,
    RegPageComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
