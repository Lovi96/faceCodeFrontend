import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {UserService} from '../services/user.service';


@Injectable()
export class MyGuard implements CanActivate {

  constructor(private userService: UserService) {
  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.userService.tokenVerify();
  }
}
