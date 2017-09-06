import {Component, Input, OnInit} from '@angular/core';
import {ProfilePagePost} from "../../classes/ProfilePagePost";
import {ProfilePagePostService} from "../../services/profile-page-post.service";
import {ImageService} from "../../services/image.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-profile-page-post',
  templateUrl: './profile-page-post.component.html',
  styleUrls: ['./profile-page-post.component.css']
})
export class ProfilePagePostComponent implements OnInit {

  @Input() post: ProfilePagePost;
  onEdit = false;
  message: string;

  constructor(private service: ProfilePagePostService, public userService: UserService) {
  }

  ngOnInit() {

  }

  edit() {
    if (this.onEdit) {

      return;
    }
    this.onEdit = !this.onEdit;
  }

  save() {
    this.onEdit = false;
    this.service.update(this.post).subscribe(result => {
      console.log(result);

    });
  }

  revert() {
    this.onEdit = false;
    this.service.getPost(this.post.id).subscribe(post => this.post);
  }

}
