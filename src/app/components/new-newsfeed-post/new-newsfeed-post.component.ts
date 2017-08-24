import {Component, OnInit} from '@angular/core';
import {NewsFeedPost} from "../../classes/NewsfeedPost";
import {NewsfeedService} from "../../services/newsfeed.service";

@Component({
  selector: 'app-new-newsfeed-post',
  templateUrl: './new-newsfeed-post.component.html',
  styleUrls: ['./new-newsfeed-post.component.css']
})
export class NewNewsfeedPostComponent implements OnInit {

  post: NewsFeedPost = new NewsFeedPost();

  constructor(private service: NewsfeedService) {
  }

  ngOnInit() {
    this.post.type = 'TEXT';
  }

  save(): void {

  }

}