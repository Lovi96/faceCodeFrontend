import {Component} from '@angular/core';
import {UserService} from '../../services/user.service'
import {LoginCredentials} from '../../classes/login-cred'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string;
  password: string;

  loginCredentail: LoginCredentials;

  exceptionMessage: string;

  constructor(private userService: UserService) {
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
        let user = x.payload;
        console.log(user);
        //kiseült, irányítás a newsfeedre
        this.exceptionMessage = 'bent vagy a matrixban';
      }
    })
  }

}
