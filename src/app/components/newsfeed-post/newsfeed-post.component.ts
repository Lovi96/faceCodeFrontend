import {Component, Input, OnInit} from '@angular/core';
import {NewsFeedPost} from '../../classes/NewsfeedPost';
import {NewsFeedType} from "../../classes/NewsFeedType";
import {UserService} from "../../services/user.service";
import {User} from "../../classes/User";
import {environment} from "../../../environments/environment";
import {NewsfeedService} from "../../services/newsfeed.service";

@Component({
  selector: 'app-newsfeed-post',
  templateUrl: './newsfeed-post.component.html',
  styleUrls: ['./newsfeed-post.component.css']
})
export class NewsFeedPostComponent implements OnInit {
  imageURL = environment.baseUrl + '/media/profileimage';

  user: User;
  userName: string;
  newsFeedTypes = NewsFeedType;
  onEdit = false;

  @Input() index: number;
  @Input() editable: boolean;
  @Input() post: NewsFeedPost;

  constructor(private userService: UserService, private newsfeedService: NewsfeedService) {
    // if (this.editable == null) { } for The Open-Closed Principle
  }

  ngOnInit() {
    this.userService.getUser(this.post.ownerID).subscribe(user => {
      console.log('user', user.firstName);
      this.user = user;
      this.userName = this.user.getFullName();
    });
    console.log(this.index);
  }

  edit(): void {
    this.onEdit = true;
  }

  cancel(): void {
    this.onEdit = false;
  }

  deletePost(): void {
    this.newsfeedService.deletePost(this.post.id).subscribe(none => this.post = null);
  }

}
