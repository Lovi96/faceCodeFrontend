import {Component, OnInit} from '@angular/core';
import {ProfilePagePostService} from "../../services/profile-page-post.service";
import {ProfilePagePost} from "../../classes/ProfilePagePost";

@Component({
  selector: 'app-new-user-post',
  templateUrl: './new-user-post.component.html',
  styleUrls: ['./new-user-post.component.css']
})
export class NewUserPostComponent implements OnInit {

  post: ProfilePagePost;
  feedbackMessage: string;

  constructor(private service: ProfilePagePostService) {
  }

  ngOnInit() {
    this.post = new ProfilePagePost();
  }

  save() {
    if (!this.post.content || !this.post.title) {
      this.feedbackMessage = "Please fill all the fields!";
      return;
    }
    this.service.newPost(this.post).subscribe(result => {
      console.log(result);
      window.location.reload();
    });
  }
}
