import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {GlobalEventsManager} from '../../services/global-events-manager.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public showNavBar = true;


  constructor(public userService: UserService, public globalEventsManager: GlobalEventsManager, private router: Router) {

    this.globalEventsManager.showNavBarEmitter.subscribe((mode) => {
      if (mode !== null) {
        this.showNavBar = mode;
      }
    });
  }

  ngOnInit() {
  }

  logOut() {
    this.globalEventsManager.showNavBar(false);
    this.userService.logOut();
    this.router.navigate(['login'])
  }

}
