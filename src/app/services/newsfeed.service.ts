import {Injectable} from '@angular/core';
import {HttpWrapper} from './http-wrapper.service';
import {UserService} from './user.service';
import {Observable} from 'rxjs/Observable';
import {NewsFeedPost} from '../classes/NewsfeedPost';
import {environment} from '../../environments/environment';
import {Response} from '@angular/http';
import {Result} from '../classes/Result';


@Injectable()
export class NewsfeedService {

  private newsFeedURL: string = environment.baseUrl + '/newsfeed';
  private newPostURL: string = environment.baseUrl + '/newsfeed/new';
  private deletePostURL: string = environment.baseUrl + '/newsfeed/delete/';

  constructor(private http: HttpWrapper, private userService: UserService) {
  }

  getFeed(): Observable<Result> {
    return this.http.get(this.newsFeedURL).map((response: Response) => response.json());
  }

  newPost(post: NewsFeedPost, fileInputId: string) {
    const formData: FormData = new FormData();

    formData.append('post', new Blob([JSON.stringify(post)], {type: 'application/json'}));

    if (post.type !== 'TEXT') {
      formData.append('file', document.getElementById(fileInputId)['files'][0]);
    }
    return this.http.post(this.newPostURL, formData).map(res => res.json());
  }

  deletePost(postId: number): Observable<any> {
    return this.http.get(this.deletePostURL + postId.toString());
  }
}
