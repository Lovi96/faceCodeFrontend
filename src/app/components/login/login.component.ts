import {Component} from '@angular/core';
import {UserService} from '../../services/user.service'
import {LoginCredentials} from '../../classes/login-cred'
import {OnInit} from '@angular/core'
import {FCException} from '../../classes/FCException'

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

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  logIn() {
    this.loginCredentail = new LoginCredentials(this.email, this.password);
    this.userService.logIn(this.loginCredentail).subscribe(x => {
      console.log(x);
      if (x.exception) {
        if (x.exception.statusCode) {
          this.exceptionMessage = FCException.get(x.exception.statusCode);
        } else {
          const stackTraceObject = x.exception.stackTrace[0];
          this.exceptionMessage = stackTraceObject.fileName + ' ' + stackTraceObject.lineNumber;
        }
      }
      if (x.payload) {
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

}
