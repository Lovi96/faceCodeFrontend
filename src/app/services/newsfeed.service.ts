import {Injectable} from '@angular/core';
import {HttpWrapper} from './http-wrapper.service';
import {UserService} from './user.service';
import {Observable} from 'rxjs/Observable';
import {NewsFeedPost} from '../classes/NewsfeedPost';
import {environment} from '../../environments/environment';
import {Response} from '@angular/http';
import {Result} from "../classes/Result";


@Injectable()
export class NewsfeedService {

  newsFeedURL: string = environment.baseUrl + '/newsfeed';

  constructor(private http: HttpWrapper, private userService: UserService) {
  }

  getFeed(): Observable<Result> {
    return this.http.get(this.newsFeedURL).map((response: Response) => response.json());
  }
}
