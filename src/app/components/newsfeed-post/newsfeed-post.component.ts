import {Component, Input, OnInit} from '@angular/core';
import {NewsFeedPost} from '../../classes/NewsfeedPost';
import {NewsFeedType} from "../../classes/NewsFeedType";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-newsfeed-post',
  templateUrl: './newsfeed-post.component.html',
  styleUrls: ['./newsfeed-post.component.css']
})
export class NewsFeedPostComponent implements OnInit {

  userName: string;
  newsFeedTypes = NewsFeedType;
  onEdit = false;

  @Input() editable: boolean;
  @Input() post: NewsFeedPost;

  constructor(private userService: UserService) {
    // if (this.editable == null) { } for The Open-Closed Principle
  }

  ngOnInit() {
    // this.userService.getUser(this.post.ownerID).subscribe(user => this.userName = user.getFullName());
    // console.log(this.index);
  }

  edit(): void {
    this.onEdit = true;
  }

  cancel(): void {
    this.onEdit = false;
  }

}
