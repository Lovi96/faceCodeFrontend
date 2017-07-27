import {Injectable} from '@angular/core';
import {User} from '../classes/User';
import {Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Result} from '../classes/Result';
import {LoginCredentials} from '../classes/login-cred';
import {HttpWrapper} from './http-wrapper.service';

import {environment} from '../../environments/environment'

@Injectable()
export class UserService {

  registerURL = environment.baseUrl + '/account/register';
  loginURL = environment.baseUrl + '/account/login';

  constructor(private http: HttpWrapper) {
  }

  registerUser(user: User): Observable<Result> {

    return this.http.post(this.registerURL, user)
      .map((response: Response) => response.json());
  }

  logIn(loginCredentials: LoginCredentials): Observable<any> {

    return this.http.post(this.loginURL, loginCredentials)
      .map((response: Response) => response.json())
  }

  getStrangers() {

  }

}
