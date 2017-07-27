import {Injectable} from '@angular/core';
import {User} from '../classes/User';
import {Headers, RequestOptions, Response, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Result} from '../classes/Result';
import {HttpWrapper} from './http-wrapper.service';
import {environment} from '../../environments/environment'
import 'rxjs/add/operator/map';

@Injectable()
export class RelationshipService {

  friendsURL = environment.baseUrl + '/relationship/friendlist';
  userSearch = environment.baseUrl + '/relationship/usersearch?';

  constructor(private http: HttpWrapper) {
  }

  filteredUserSearch(firstName: string, lastName: string, gender: string, age: number): Observable<User[]> {
    let params = new URLSearchParams();
    params.set("firstName", firstName);
    params.set("lastName", lastName);
    params.set("gender", gender);
    params.set("age", age.toString());

    let URLWithQuery = this.userSearch + params.toString();
    console.log(URLWithQuery);

    return this.http.get(URLWithQuery).map((response: Response) => (response.json() as Result).payload);
  }

  getFriends(): Observable<Result> {
    return this.http.get(this.friendsURL)
      .map((response: Response) => response.json());
  }

}
