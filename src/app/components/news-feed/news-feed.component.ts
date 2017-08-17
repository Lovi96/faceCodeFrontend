import {Component, OnInit} from '@angular/core';
import {NewsfeedService} from '../../services/newsfeed.service';
import {NewsfeedPost} from '../../classes/NewsfeedPost';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {

  posts: NewsfeedPost[];

  constructor(private newsFeedService: NewsfeedService) {
  }

  ngOnInit() {
    this.newsFeedService.getFeed().subscribe(posts => this.posts = posts);
  }

}
