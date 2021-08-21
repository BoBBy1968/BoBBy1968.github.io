import { Component } from '@angular/core';
import { IClient } from 'src/app/interfaces/client';
import { UserService } from 'src/app/users/user.service';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent {

  clients: IClient[] | undefined;

  get isLogged() {
    return this.userService.isLogged;
  } 

  constructor(
    private clientService: ClientService,
    private userService: UserService,
  ) { 
    this.getAllClients();
  }

  getAllClients(){
    this.clients = undefined;
    this.clientService.getAllClients().subscribe(x => this.clients = x);
  }
  

}
