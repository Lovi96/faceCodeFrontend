import {Component, OnInit, Input} from '@angular/core';
import {User} from "../../classes/User";
import {RelationshipService} from "../../services/relationship-service.service";
import {Relationship} from "../../classes/Relationship";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-relationship-button',
  templateUrl: 'relationship-button.component.html',
  styleUrls: ['relationship-button.component.css']
})
export class RelationshipButtonComponent implements OnInit {

  @Input() user: User;
  relation: Relationship;

  constructor(private service: RelationshipService, public userService: UserService) {}


  ngOnInit() {
    this.service.checkRelationhipStatus(this.user.id).subscribe(relationship => this.relation = relationship)
  }

  createRelationship(status : number) {
    this.service.sendFriendRequest(this.user.id, status)
  }





}
