import {Component, OnInit, Input} from '@angular/core';
import {User} from '../../classes/User';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-compact-user-viev',
  templateUrl: './compact-user-viev.component.html',
  styleUrls: ['./compact-user-viev.component.css']
})
export class CompactUserVievComponent implements OnInit {

  user: User;
  @Input() id: number;

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.userService.getUser(this.id).subscribe(result => {
      console.log("miagyászvan");
      console.log(result);
      this.user = result;
    });
  }
}
