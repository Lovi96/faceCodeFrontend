import {Component} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../classes/User';

@Component({
  selector: 'app-reg-page',
  templateUrl: './reg-page.component.html',
  styleUrls: ['./reg-page.component.css']
})
export class RegPageComponent {

  user: User;

  email: String = "place@holder.com";
  password: String = "jelszo";
  pwAgain: String = "jelszo";
  yearOfBirth: number = 1997;
  gender: String = "FEMALE";
  firstName: String = "Virág";
  lastName: String = "Kiss";
  address: String = "Aranyközép út 69.";
  city: String = "Smallville";
  phone: String = "telefoááám";

  exceptionMessage: string;

  success: boolean;

  constructor(private userService: UserService) {
  }

  send(): void {
    this.success = false;
    this.exceptionMessage = null;
    this.user = new User(this.email, this.password, this.yearOfBirth, this.gender,
      this.firstName, this.lastName, this.address, this.city, this.phone);

    this.userService.registerUser(this.user).subscribe(x => {

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
        this.success = true;
      }
    });
  }


}
