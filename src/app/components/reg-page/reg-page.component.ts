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

  email: string = "place@holder.com";
  password: string = "jelszo";
  pwAgain: string = "jelszo";
  birthDate: number = 1997;
  gender: string = "FEMALE";
  firstName: string = "Virág";
  lastName: string = "Kiss";
  address: string = "Aranyközép út 69.";
  city: string = "Smallville";
  phone: string = "telefoááám";

  // email: string;
  // password: string;
  // pwAgain: string;
  // yearOfBirth: number;
  // gender: string;
  // firstName: string;
  // lastName: string;
  // address: string;
  // city: string;
  // phone: string;

  feedBackMessage: string;

  success: boolean;

  constructor(private userService: UserService) {
  }

  send(): void {
    if (this.password !== this.pwAgain) {
      this.feedBackMessage = 'Passwords aren\'t match';
      return;
    }

    this.success = false;
    this.feedBackMessage = null;
    this.user = new User({
        email: this.email,
        password: this.password,
        birthDate: this.birthDate,
        gender: this.gender,
        firstName: this.firstName,
        lastName: this.lastName,
        address: this.address,
        city: this.city,
        phone: this.phone
    });
    this.userService.postUserData(this.user).subscribe(x => {
      console.log(x);


      if (x.exception) {
        const stackTraceOjbect = x.exception.stackTrace[0];
        this.feedBackMessage = stackTraceOjbect.fileName + " " + stackTraceOjbect.lineNumber;
        if (x.exception.statusCode) {
          this.feedBackMessage = FCException.get(x.exception.statusCode);
        }
        if (x.exception.localizedMessage) {
          this.feedBackMessage = x.exception.localizedMessage.toString();
        }
      }
      if (x.payload) {
        this.success = true;
      }
    });
  }

}
