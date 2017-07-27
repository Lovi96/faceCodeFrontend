import {Injectable} from '@angular/core';
import {User} from '../classes/User';
import {Http, Response, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Result} from '../classes/Result';

import 'rxjs/add/operator/map';

@Injectable()
export class RelationshipService {

  // headers = new Headers({'Content-Type': 'application/json'});
  headers = new Headers({'Cookies': document.cookie});
  options = new RequestOptions({headers: this.headers, withCredentials: true});

  friendsURL = 'http://localhost:8080/facecode/relationship/friendlist';
  userSearch = 'http://localhost:8080/facecode/relationship/usersearch?';

  constructor(private http: Http) {
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
    return this.http.get(this.friendsURL, this.options)
      .map((response: Response) => response.json());
  }

}
