import {Component} from '@angular/core';
import {UserService} from '../../services/user.service'
import {LoginCredentials} from '../../classes/login-cred'
import {OnInit} from "@angular/core"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = "place@holder.com";
  password = "jelszo";

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
          this.exceptionMessage = x.exception.statusCode.toString();
        }
        else {
          let stackTraceOjbect = x.exception.stackTrace[0];
          this.exceptionMessage = stackTraceOjbect.fileName + " " + stackTraceOjbect.lineNumber;
        }
      }
      if (x.payload) {
        let token = x.payload;
        console.log(token);
        localStorage.setItem('token', token);
        this.exceptionMessage = 'bent vagy a matrixban';
      }
    })
  }

}
