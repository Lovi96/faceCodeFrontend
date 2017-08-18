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
    console.log(this.user);
    this.service.checkRelationhipStatus(this.user.id).subscribe(result => this.relation = result.payload as Relationship);
    console.log(this.relation);

  }

  createRelationship(status : number) {
    console.log(this.relation);
    this.service.sendFriendRequest(this.user.id, status).subscribe();
    this.service.checkRelationhipStatus(this.user.id).subscribe(result => this.relation = result.payload as Relationship);
  }





}
