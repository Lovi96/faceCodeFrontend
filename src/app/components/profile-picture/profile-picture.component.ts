import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpWrapper} from "../../services/http-wrapper.service";

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.css']
})
export class ProfilePictureComponent implements OnInit {


  constructor(private http: HttpWrapper) {
  }

  ngOnInit() {
  }

  uploadImage(): void {
    let formData = new FormData();
    formData.append('image', document.getElementById('image')['files'][0]);

    let headers = new Headers();

    this.http.post(environment.baseUrl + '/account/profileimage/upload', formData).subscribe();
  }

}
