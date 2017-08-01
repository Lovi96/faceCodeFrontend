import {Component, OnInit} from '@angular/core';
import {User} from '../../classes/User';
import {UserService} from '../../services/user.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Location} from '@angular/common'


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  user: User;

  constructor(private userService: UserService, private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.route.paramMap
      .switchMap((params: ParamMap) => this.userService.getUser(+params.get('id')))
      .subscribe(user => this.user = user);

  }

}
