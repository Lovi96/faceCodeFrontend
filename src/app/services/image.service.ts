import {Injectable} from '@angular/core';
import {HttpWrapper} from "./http-wrapper.service";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs/Observable";
import {Result} from "../classes/Result";
import {Response} from '@angular/http';


@Injectable()
export class ImageService {

  constructor(private http: HttpWrapper) {
  }

  uploadProfileImage(): Observable<Result> {

    let formData = new FormData();
    formData.append('image', document.getElementById('image')['files'][0]);
    let headers = new Headers();
    return this.http.post(environment.baseUrl + '/media/profileimage/upload', formData).map((response: Response) =>
      response.json());
  }

}
