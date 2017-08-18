import {Component} from '@angular/core';
import construct = Reflect.construct;
import {UserService} from "./services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FaceCode';

  constructor(private userService: UserService, private router: Router) {
  }

  logOut(){
    localStorage.clear();
  }
}
