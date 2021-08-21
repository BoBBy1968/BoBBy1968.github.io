import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  get user() {
    return this.userService.user;
  }

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

}
