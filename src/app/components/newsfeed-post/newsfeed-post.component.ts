import {Component, Input, OnInit} from '@angular/core';
import {NewsfeedPost} from "../../classes/NewsfeedPost";

@Component({
  selector: 'app-newsfeed-post',
  templateUrl: './newsfeed-post.component.html',
  styleUrls: ['./newsfeed-post.component.css']
})
export class NewsfeedPostComponent implements OnInit {

  editable: boolean;

  @Input() post: NewsfeedPost;

  constructor() {
  }

  ngOnInit() {
  }

}
