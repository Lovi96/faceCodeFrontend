import {Injectable} from '@angular/core';
import {HttpWrapper} from './http-wrapper.service';
import {environment} from '../../environments/environment'
import {Observable} from 'rxjs/Observable';
import {ProfilePagePost} from '../classes/ProfilePagePost';
import {Result} from '../classes/Result';
import {Response} from '@angular/http';


@Injectable()
export class ProfilePagePostService {

  private postsURL = environment.baseUrl + '/profileposts/posts/';
  private postUpdateURL = environment.baseUrl + '/profileposts/update/';
  private singlePostURL = environment.baseUrl + '/profileposts/';
  private newPostURL = environment.baseUrl + '/profileposts/newpost';
  private deletePostURL: string = environment.baseUrl + '/profileposts/delete/';


  constructor(private http: HttpWrapper) {
  }

  newPost(post: ProfilePagePost): Observable<Result>{
    return this.http.post(this.newPostURL, post).map((response: Response) => response.json());
  }


  getPosts(userID: number): Observable<ProfilePagePost[]> {
    return this.http.get(this.postsURL + userID.toString())
      .map((response: Response) => (response.json() as Result).payload);
  }

  update(post: ProfilePagePost): Observable<Result> {
    return this.http.post(this.postUpdateURL, post).map((response: Response) => response.json());
  }

  getPost(postID: number): Observable<ProfilePagePost> {
    return this.http.get(this.singlePostURL + postID).map((response:Response) => response.json());
  }

  deletePost(postId: number): Observable<any> {
    return this.http.get(this.deletePostURL + postId.toString());
  }
}
