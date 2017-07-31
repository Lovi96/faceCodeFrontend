import {Component} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../classes/User';
import {FCException} from "../../classes/FCException";

@Component({
  selector: 'app-reg-page',
  templateUrl: './reg-page.component.html',
  styleUrls: ['./reg-page.component.css']
})
export class RegPageComponent {

  user: User;

  // email: string = "place@holder.com";
  // password: string = "jelszo";
  // pwAgain: string = "jelszo";
  // yearOfBirth: number = 1997;
  // gender: string = "FEMALE";
  // firstName: string = "Virág";
  // lastName: string = "Kiss";
  // address: string = "Aranyközép út 69.";
  // city: string = "Smallville";
  // phone: string = "telefoááám";

  email: string;
  password: string;
  pwAgain: string;
  yearOfBirth: number;
  gender: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  phone: string;

  exceptionMessage: string;

  success: boolean;

  constructor(private userService: UserService) {
  }

  send(): void {
    if (this.password !== this.pwAgain) {
      this.exceptionMessage = "Passwords don't match";
      return;
    }

    this.success = false;
    this.exceptionMessage = null;
    this.user = new User(this.email, this.password, this.yearOfBirth, this.gender,
      this.firstName, this.lastName, this.address, this.city, this.phone);
    this.userService.registerUser(this.user).subscribe(x => {
      console.log(x);


      if (x.exception) {
        const stackTraceOjbect = x.exception.stackTrace[0];
        this.exceptionMessage = stackTraceOjbect.fileName + " " + stackTraceOjbect.lineNumber;
        if (x.exception.statusCode) {
          this.exceptionMessage = FCException.get(x.exception.statusCode);
        }
        if (x.exception.localizedMessage) {
          this.exceptionMessage = x.exception.localizedMessage.toString();
        }
      }
      if (x.payload) {
        this.success = true;
      }
    });
  }


}
