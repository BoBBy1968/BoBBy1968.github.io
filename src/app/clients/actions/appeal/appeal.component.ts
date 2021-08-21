import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';

@Component({
  selector: 'app-appeal',
  templateUrl: './appeal.component.html',
  styleUrls: ['./appeal.component.css']
})
export class AppealComponent implements OnInit {

  get client() {
    return this.clientService.client;
  }

  constructor(
    
    private clientService: ClientService,
  ) { }

  ngOnInit(): void {
  }

}
