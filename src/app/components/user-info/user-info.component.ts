import { Component, OnInit } from '@angular/core';
import {User} from "../../user.model";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  Users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserList().subscribe(res => {
      this.Users = res.map( e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}
        } as User;
      })
    });
  }

}
