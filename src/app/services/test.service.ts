import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class TestService {
  private testUrl = 'http://localhost:8080/facecode/test';


  constructor(private http: Http) {
  }


  testIt(): Observable<String> {
    return this.http.get(this.testUrl).map((res: Response) => res.text());
  }



  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

