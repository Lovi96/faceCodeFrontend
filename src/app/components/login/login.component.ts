import {Component} from '@angular/core';
import {UserService} from '../../services/user.service'
import {LoginCredentials} from '../../classes/login-cred'
import {OnInit} from '@angular/core'
import {FCException} from '../../classes/FCException'
import {Http} from '@angular/http';
import {Router} from "@angular/router";
import {MyGuard} from "../../guards/can-active.guard";
import {environment} from "../../../environments/environment";

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

  constructor(private myGuard:MyGuard,private http: Http, private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
    this.makeNavbarUnvisible();
    const token = this.myGuard.getToken();
    if(token != null){
      this.router.navigate(['/profile']);
    }
  }


  logIn() {
    this.loginCredentail = new LoginCredentials(this.email, this.password);
    this.userService.logIn(this.loginCredentail).subscribe(x => {
      console.log(x);
      // this.makeWelcomeGoAway();
      // this.makeFooterGoAway();
      // this.makeBackgroundPlain();
      // this.makeLoginGoAway();
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

        this.makeNavbarVisible();
        this.router.navigate(['/profile']);
        this.makeBackgroundPlain();
      }
    })
  }

  makeNavbarVisible() {
    document.getElementById("navBar").style.visibility = "visible";
  }

  setToken(token: number): void {
    localStorage.setItem('token', token.toString());
  }

  setUserId(userId: number): void {
    localStorage.setItem('userID', userId.toString());
  }

  makeNavbarUnvisible() {
    document.getElementById("navBar").style.visibility = "hidden";
  }

  makeBackgroundPlain() {
    document.getElementById("bodyOfPage").style.backgroundImage = "";
  }

  makeWelcomeGoAway() {
    document.getElementById("goAway").innerHTML = "";
  }

  makeFooterGoAway() {
    document.getElementById("footerElement").innerText = "";
  }

  makeLoginGoAway() {
    document.getElementById("loginElement").innerHTML = "";
  }

}
