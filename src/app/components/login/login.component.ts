import {Component} from '@angular/core';
import {UserService} from '../../services/user.service'
import {LoginCredentials} from '../../classes/login-cred'
import {OnInit} from '@angular/core'
import {FCException} from '../../classes/FCException'
import {Http} from '@angular/http';
import {Router} from "@angular/router";
import {MyGuard} from "../../guards/can-active.guard";

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

  constructor(private http: Http, private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.setRandomWallpaper();
    if (this.userService.tokenVerify()) {
      this.router.navigate(['/newsfeed']);
    }
  }

  logIn() {
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

        this.router.navigate(['/newsfeed']);
      }
    })
  }

  setToken(token: number): void {
    localStorage.setItem('token', token.toString());
  }

  setUserId(userId: number): void {
    localStorage.setItem('userID', userId.toString());
  }

  setRandomWallpaper(): void {
    var locationArray = window.location.href.split('/');
    console.log(locationArray[locationArray.length - 1]);
    if (locationArray[locationArray.length - 1] === "login") {
      var bgs = ["bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg"];
      var randomBg = bgs[Math.floor((Math.random() * bgs.length))];
      document.body.style.backgroundImage = "url(./assets/" + randomBg + ")";
    }
  }


}
