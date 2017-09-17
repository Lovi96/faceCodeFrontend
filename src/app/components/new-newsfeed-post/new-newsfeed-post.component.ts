import {Component, OnInit, Input} from '@angular/core';
import {NewsFeedPost} from "../../classes/NewsfeedPost";
import {NewsfeedService} from "../../services/newsfeed.service";
import {Result} from "../../classes/Result";

@Component({
  selector: 'app-new-newsfeed-post',
  templateUrl: './new-newsfeed-post.component.html',
  styleUrls: ['./new-newsfeed-post.component.css']
})
export class NewNewsfeedPostComponent implements OnInit {

  @Input() post: NewsFeedPost;
  fileInputId = 'newPost';

  constructor(private service: NewsfeedService) {
  }

  ngOnInit() {
    if (!this.post) {
      this.post = new NewsFeedPost();
    }
  }

  save(): void {
    this.service.newPost(this.post, this.fileInputId).subscribe(result => {
      window.location.reload();
    });
  }

  ready(): boolean {
    return (this.post.type != null && this.post.shareLevel != null);
  }

  myFunction() {
    const x = document.getElementById("Demo");
    if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else {
      x.className = x.className.replace(" w3-show", "");
    }
  }
}
