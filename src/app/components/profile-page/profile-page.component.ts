import {Component, OnInit} from '@angular/core';
import {User} from '../../classes/User';
import {UserService} from '../../services/user.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Location} from '@angular/common'
import {ProfilePagePostService} from "../../services/profile-page-post.service";
import {ProfilePagePost} from "../../classes/ProfilePagePost";


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  user: User;
  posts: ProfilePagePost[];
  id: string;

  constructor(private userService: UserService, private route: ActivatedRoute,
              private profilePagePostService: ProfilePagePostService) {
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.id = params.get('id')).subscribe();

    this.userService.getUser(+this.id)
      .subscribe(user => this.user = user);

    this.profilePagePostService.getPosts(+this.id).subscribe(posts => this.posts = posts);

  }

}
