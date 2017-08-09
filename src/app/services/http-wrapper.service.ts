import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class   HttpWrapper {

  constructor(private http: Http) {
  }

  createAuthorizationHeader(headers: Headers) {
    const token = localStorage.getItem('token');
    if (token) {
      headers.append('X-Token', token);
    }
  }

  get(url) {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {headers});
  }

  post(url, data) {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {headers});
  }
}
