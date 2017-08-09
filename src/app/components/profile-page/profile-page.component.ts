import {Component, OnInit} from '@angular/core';
import {User} from '../../classes/User';
import {UserService} from '../../services/user.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {Location} from '@angular/common'
import {ProfilePagePostService} from "../../services/profile-page-post.service";
import {ProfilePagePost} from "../../classes/ProfilePagePost";
import {environment} from "../../../environments/environment";
import {FCException} from "../../classes/FCException";
import {ImageService} from "../../services/image.service";


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  user: User;
  posts: ProfilePagePost[];
  id: string;
  onEdit: boolean;
  feedbackMessage: string;
  pwAgain: string;

  imageURL = environment.baseUrl + '/account/profileimage';

  constructor(private userService: UserService, private route: ActivatedRoute,
              private profilePagePostService: ProfilePagePostService,
              public imageService: ImageService) {
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.id = params.get('id')).subscribe();

    this.userService.getUser(+this.id)
      .subscribe(user => {
        this.user = user;
        this.user.password = '';
      });

    this.profilePagePostService.getPosts(+this.id).subscribe(posts => this.posts = posts);
  }

  edit(): void {
    this.onEdit = true;
  }

  revert(): void {
    this.onEdit = false;
    this.userService.getUser(+this.id).subscribe(user => this.user = user);
  }

  save(): void {
    if (this.user.password !== this.pwAgain) {
      this.feedbackMessage = 'Passwords are\'nt match';
      return;
    }
    this.onEdit = false;
    this.userService.updateUserData(this.user).subscribe(result => {
      if (result.payload) {
        this.userService.getUser(+this.id).subscribe(user => {
          this.user = user;
          this.user.password = '';
        });
      }
      if (result.exception) {
        const stackTraceOjbect = result.exception.stackTrace[0];
        this.feedbackMessage = stackTraceOjbect.fileName + ' ' + stackTraceOjbect.lineNumber;
        if (result.exception.statusCode) {
          this.feedbackMessage = FCException.get(result.exception.statusCode);
        }
        if (result.exception.localizedMessage) {
          this.feedbackMessage = result.exception.localizedMessage.toString();
        }
      }
    })
  }


}
