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
import {ProfilePagePostComponent} from './components/profile-page-post/profile-page-post.component';
import {ProfilePagePostService} from "./services/profile-page-post.service";
import {ImageService} from "./services/image.service";
import {NewUserPostComponent} from './components/new-user-post/new-user-post.component';
import {NewsFeedPostComponent} from './components/newsfeed-post/newsfeed-post.component';
import {NewsfeedService} from "./services/newsfeed.service";
import {NewsFeedComponent} from './components/news-feed/news-feed.component';
import {RelationshipButtonComponent} from './components/relationship-button/relationship-button.component';
import {NewNewsfeedPostComponent} from './components/new-newsfeed-post/new-newsfeed-post.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {GlobalEventsManager} from "./services/global-events-manager.service";


@NgModule({
  declarations: [
    AppComponent,
    RegPageComponent,
    LoginComponent,
    UserListComponent,
    CompactUserVievComponent,
    ProfilePageComponent,
    ProfilePagePostComponent,
    RelationshipButtonComponent,
    NewUserPostComponent,
    NewsFeedPostComponent,
    NewsFeedComponent,
    NewNewsfeedPostComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [UserService,
    RelationshipService,
    HttpWrapper,
    MyGuard,
    ProfilePagePostService,
    ImageService,
    NewsfeedService,
    GlobalEventsManager],
  bootstrap: [AppComponent]
})
export class AppModule {
}
