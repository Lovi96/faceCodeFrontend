import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import {environment} from '../../environments/environment';
import {Response} from '@angular/http';


@Injectable()
export class MyGuard implements CanActivate {

  constructor(private http: Http) {
  }

  getToken(): String {
    return localStorage.getItem('token');
  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const token = this.getToken();
    if (!token) {
      return false
    }

    return this.http.post(environment.baseUrl + '/account/tokencheck', token)
      .map((response: Response) => {
        return response.json().status;
      });
  }
}
