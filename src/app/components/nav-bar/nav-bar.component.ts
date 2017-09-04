import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {GlobalEventsManager} from '../../services/global-events-manager.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public showNavBar = true;


  constructor(public userService: UserService, public globalEventsManager: GlobalEventsManager) {

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
  }

}
