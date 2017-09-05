import {Component, OnInit} from '@angular/core';
import {NewsfeedService} from '../../services/newsfeed.service';
import {NewsFeedPost} from '../../classes/NewsfeedPost';
import {UserService} from '../../services/user.service';
import {Router} from "@angular/router";
import {MyGuard} from "../../guards/can-active.guard";

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {

  posts: NewsFeedPost[];
  userID: number;

  constructor(private newsFeedService: NewsfeedService, private userService: UserService, private router: Router, private guard: MyGuard) {
  }

  ngOnInit() {
    // if (!this.guard.canActivate()) {
    //   console.log("belép");
    //   this.router.navigate(['/login']);
    // }

    this.newsFeedService.getFeed().subscribe(result => {
      let posts = result.payload as NewsFeedPost[];
      let postArray = new Array();
      for (let i = 0; i < posts.length; i++) {
        let post = new NewsFeedPost();
        post.type = posts[i].type;
        post.id = posts[i].id;
        post.ownerID = posts[i].ownerID;
        post.shareLevel = posts[i].shareLevel;
        post.title = posts[i].title;
        post.content = posts[i].content;
        post.postedOn = posts[i].postedOn;
        postArray.push(post);
      }
      this.posts = postArray;
    });
    this.userID = this.userService.getLoggedInUserId();
  }

}
