import {Injectable} from '@angular/core';
import {User} from '../classes/User';
import {Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Result} from '../classes/Result';
import {LoginCredentials} from '../classes/login-cred';
import {HttpWrapper} from './http-wrapper.service';

import {environment} from '../../environments/environment'
import {GlobalEventsManager} from "./global-events-manager.service";

@Injectable()
export class UserService {

  registerURL = environment.baseUrl + '/account/register';
  loginURL = environment.baseUrl + '/account/login';
  singleUser = environment.baseUrl + '/account/getuser/';
  updateURL = environment.baseUrl + '/account/edit';

  constructor(private http: HttpWrapper, private globalEventsManager: GlobalEventsManager) {
  }

  postUserData(user: User): Observable<Result> {
    return this.http.post(this.registerURL, user)
      .map((response: Response) => response.json());
  }

  updateUserData(user: User): Observable<Result> {
    console.log("user a serviceben", user.lastName);
    return this.http.post(this.updateURL, user)
      .map((response: Response) => response.json());
  }

  logIn(loginCredentials: LoginCredentials): Observable<any> {
    return this.http.post(this.loginURL, loginCredentials)
      .map((response: Response) => {
        return response.json();
      });
  }

  getUser(id: number): Observable<User> {
    return this.http.get(this.singleUser + id).map((response: Response) => new User(response.json().payload));
  }

  getLoggedInUserId(): number {
    return +localStorage.getItem('userID');
  }

  logOut(): void {
    // localStorage.removeItem('token');
    localStorage.clear();
    this.globalEventsManager.showNavBar(false);
    // window.location.replace('/login');
  }



}
