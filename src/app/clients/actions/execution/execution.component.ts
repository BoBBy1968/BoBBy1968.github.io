import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';

@Component({
  selector: 'app-execution',
  templateUrl: './execution.component.html',
  styleUrls: ['./execution.component.css']
})
export class ExecutionComponent implements OnInit {

  get client() {
    return this.clientService.client;
  }

  constructor(
    
    private clientService: ClientService,
  ) { }

  ngOnInit(): void {
  }

}
