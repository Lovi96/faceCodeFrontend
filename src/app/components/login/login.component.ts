import {Component} from '@angular/core';
import {UserService} from '../../services/user.service'
import {LoginCredentials} from '../../classes/login-cred'
import {OnInit} from '@angular/core'
import {FCException} from '../../classes/FCException'
import {Http} from '@angular/http';
import {Router} from "@angular/router";
import {MyGuard} from "../../guards/can-active.guard";
import {GlobalEventsManager} from "../../services/global-events-manager.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = 'place@holder.com';
  password = 'jelszo';

  loginCredentail: LoginCredentials;

  feedbackMessage: string;

  constructor(private http: Http, private userService: UserService, private router: Router,
              private guard: MyGuard, public globalEventsManager: GlobalEventsManager) {
  }

  ngOnInit(): void {
    this.setRandomWallpaper();
    this.globalEventsManager.showNavBar(false);
    // if (this.guard.canActivate()) {
    //   console.log("beenged");
    //   this.forwardToNewsfeed();
    // }
  }

  logIn() {
    this.globalEventsManager.showNavBar(false);
    this.loginCredentail = new LoginCredentials(this.email, this.password);
    this.userService.logIn(this.loginCredentail).subscribe(x => {
      console.log(x);
      if (x.exception) {
        if (x.exception.statusCode) {
          this.feedbackMessage = FCException.get(x.exception.statusCode);
        } else {
          const stackTraceObject = x.exception.stackTrace[0];
          this.feedbackMessage = stackTraceObject.fileName + ' ' + stackTraceObject.lineNumber;
        }
      }
      if (x.payload) {
        this.setToken(x.payload.token);
        this.setUserId(x.payload.userID);
        this.feedbackMessage = 'Logged in successfully';
        this.forwardToNewsfeed();

      }
    })
  }

  forwardToNewsfeed(): void {
    this.removeWallpaper();
    this.globalEventsManager.showNavBar(true);
    this.router.navigate(['/newsfeed']);
  }

  setToken(token: number): void {
    localStorage.setItem('token', token.toString());
  }

  setUserId(userId: number): void {
    localStorage.setItem('userID', userId.toString());
  }

  setRandomWallpaper(): void {
    var locationArray = window.location.href.split('/');
    if (locationArray[locationArray.length - 1] === "login") {
      var bgs = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg"];
      var randomBg = bgs[Math.floor((Math.random() * bgs.length))];
      document.body.style.backgroundImage = "url(./assets/" + randomBg + ")";
    }
  }

  removeWallpaper(): void {
    document.body.style.backgroundImage = '';
  }


}
