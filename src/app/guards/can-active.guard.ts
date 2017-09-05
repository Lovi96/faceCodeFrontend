import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {Response} from '@angular/http';
import {HttpWrapper} from "../services/http-wrapper.service";
import "rxjs/add/operator/do";


@Injectable()
export class MyGuard implements CanActivate {

  constructor(private http: HttpWrapper, private router: Router) {
  }

  getToken(): String {
    return localStorage.getItem('token');
  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const token = this.getToken();
    if (!token) {
      this.redirectToLogin(false);
      return false;
    }
    return this.http.post(environment.baseUrl + '/account/tokencheck', token)
      .map(response => response.json().status)
      .do(this.redirectToLogin);
  }

  redirectToLogin(status: boolean) {
    if (!status) {
      this.router.navigate(['/login']);
    }
  }
}
