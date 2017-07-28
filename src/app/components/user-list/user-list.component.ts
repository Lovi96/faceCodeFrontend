import {Component, OnInit} from '@angular/core';
import {RelationshipService} from '../../services/relationship-service.service';
import {User} from '../../classes/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  firstName = '';
  lastName = '';
  age = 0;
  gender = '';
  relation = 1;

  exceptionMessage: string;

  constructor(private relationshipService: RelationshipService) {
  }

  ngOnInit() {

  }

  get() {
    this.relationshipService.filteredUserSearch(this.firstName, this.lastName, this.gender, this.age)
      .subscribe(x => this.users = x);
  }

}
