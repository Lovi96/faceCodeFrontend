import {Component} from '@angular/core';
import {UserService} from '../../services/user.service'
import {LoginCredentials} from '../../classes/login-cred'
import {OnInit} from '@angular/core'
import {FCException} from '../../classes/FCException'
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = 'place@holder.com';
  password = 'jelszo';

  loginCredentail: LoginCredentials;

  exceptionMessage: string;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit(): void {
  }

  logIn() {
    this.loginCredentail = new LoginCredentials(this.email, this.password);
    this.userService.logIn(this.loginCredentail).subscribe(x => {
      console.log(x);
      this.makeWelcomeGoAway();
      this.makeFooterGoAway();
      this.makeBackgroundPlain();
      this.makeNavbarVisible();
      this.makeLoginGoAway();
      if (x.exception) {
        if (x.exception.statusCode) {
          this.exceptionMessage = FCException.get(x.exception.statusCode);
        } else {
          const stackTraceObject = x.exception.stackTrace[0];
          this.exceptionMessage = stackTraceObject.fileName + ' ' + stackTraceObject.lineNumber;
        }
      }
      if (x.payload) {

        this.router.navigate(['/profile/' + this.userService.getLoggedInUserId()]);
        this.setToken(x.payload.token);
        this.setUserId(x.payload.userID);
        this.exceptionMessage = 'Logged in successfully';
      }
    })
  }

  setToken(token: number): void {
    localStorage.setItem('token', token.toString());
  }

  setUserId(userId: number): void {
    localStorage.setItem('userID', userId.toString());
  }

  makeNavbarVisible() {
    document.getElementById("navBar").style.visibility = "visible";
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
