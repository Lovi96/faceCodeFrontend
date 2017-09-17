import {Component, OnInit, Input} from '@angular/core';
import {User} from '../../classes/User';
import {UserService} from '../../services/user.service';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-compact-user-viev',
  templateUrl: './compact-user-viev.component.html',
  styleUrls: ['./compact-user-viev.component.css']
})
export class CompactUserVievComponent implements OnInit {

  @Input() user: User;
  @Input() id: number;
  imageURL :string = environment.baseUrl+'/media/profileimage';

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    if (this.user == null) {

      this.userService.getUser(this.id).subscribe(user => {
        this.user = user;
      });
    }
  }
}
