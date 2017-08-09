import { Injectable } from '@angular/core';
import {HttpWrapper} from "./http-wrapper.service";
import {environment} from "../../environments/environment";

@Injectable()
export class ImageService {

  constructor(private http: HttpWrapper) { }

  uploadProfileImage(): void {
    let formData = new FormData();
    formData.append('image', document.getElementById('image')['files'][0]);
    let headers = new Headers();
    this.http.post(environment.baseUrl + '/account/profileimage/upload', formData).subscribe();
  }

}
