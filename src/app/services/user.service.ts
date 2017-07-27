import {Injectable} from '@angular/core';
import {User} from '../classes/User';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Result} from '../classes/Result';
import {LoginCredentials} from '../classes/login-cred';


@Injectable()
export class UserService {

  registerURL = 'http://localhost:8080/facecode/account/register';
  loginURL = 'http://localhost:8080/facecode/account/login';

  headers = new Headers({'Content-Type': 'application/json'});

  options = new RequestOptions({headers: this.headers, withCredentials: true});



  constructor(private http: Http) {
  }

  registerUser(user: User): Observable<Result> {

    return this.http.post(this.registerURL, user, this.options)
      .map((response: Response) => response.json());
  }

  logIn(loginCredentials: LoginCredentials): Observable<any> {

    return this.http.post(this.loginURL, loginCredentials, this.options)
      .map((response: Response) => response.json())
  }

  getStrangers() {

  }

}
