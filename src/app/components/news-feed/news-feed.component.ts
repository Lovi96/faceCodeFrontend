import {Component, OnInit} from '@angular/core';
import {NewsfeedService} from '../../services/newsfeed.service';
import {NewsFeedPost} from '../../classes/NewsfeedPost';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {

  posts: NewsFeedPost[];
  userID: number;

  constructor(private newsFeedService: NewsfeedService, private userService: UserService) {
  }

  ngOnInit() {
    this.newsFeedService.getFeed().subscribe(posts => this.posts = posts);
    this.userID = this.userService.getLoggedInUserId();
  }
}
