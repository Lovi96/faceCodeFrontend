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
  onEdit: boolean = false;
  feedbackMessage: string;
  pwAgain: string;
  editable: boolean;


  onImageUpload: boolean = false;


  imageURL = environment.baseUrl + '/media/profileimage';

  // imageURL = environment.baseUrl + '/account/profileimage';

  constructor(public userService: UserService, private route: ActivatedRoute,
              private profilePagePostService: ProfilePagePostService,
              private imageService: ImageService) {
  }

  ngOnInit(): void {

    this.route.paramMap
      .switchMap((params: ParamMap) => this.id = params.get('id') == null ? this.userService.getLoggedInUserId()
        .toString() : params.get('id')).subscribe(result => {
      this.userService.getUser(+this.id)
        .subscribe(user => {
          this.user = user;
          this.user.password = '';
          this.imageURL.concat('/', this.id);
          console.log(this.user);
          console.log(this.user.getFullName());
        });

      this.profilePagePostService.getPosts(+this.id).subscribe(posts => this.posts = posts);
    });
  this.editable = this.id === this.userService.getLoggedInUserId().toString();

  }

  edit(): void {
    this.onEdit = true;
    this.user.password = '';
  }

  revert(): void {
    this.onEdit = false;
    this.userService.getUser(+this.id).subscribe(user => this.user = user);
    this.feedbackMessage = '';
  }

  save(): void {
    if (this.user.password !== this.pwAgain) {
      this.feedbackMessage = 'Passwords don\'t match';
      return;
    }
    this.onEdit = false;
    console.log(this.user);
    this.userService.updateUserData(this.user).subscribe(result => {
        if (result.payload) {
          this.userService.getUser(+this.id).subscribe(user => {
            this.user = user;
            this.user.password = '';
            this.feedbackMessage = '';

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
      }
    )
  }

  uploadImage(): void {
    this.imageService.uploadProfileImage().subscribe(
      result => {
        if (!result.exception) {
          window.location.reload();
        }
      });
  }
}
