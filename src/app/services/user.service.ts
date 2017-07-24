import {Injectable} from '@angular/core';
import {User} from '../classes/User';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Result} from '../classes/Result';


@Injectable()
export class UserService {

  registerEndpoint = 'http://localhost:8080/facecode/account/register';

  headers = new Headers({'Content-Type': 'application/json'});
  options = new RequestOptions({headers: this.headers});

  constructor(private http: Http) {
  }

  registerUser(user: User): Observable<Result> {

    return this.http.post(this.registerEndpoint, user, this.options)
      .map((response: Response) => response.json());
  }

}
