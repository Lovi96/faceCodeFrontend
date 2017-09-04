import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {MyGuard} from "../../guards/can-active.guard";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public userService: UserService) {
  }

  ngOnInit() {
  }

  logOut() {
    this.userService.logOut();
  }

}
