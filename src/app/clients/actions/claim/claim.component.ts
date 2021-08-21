import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IClient } from 'src/app/interfaces/client';
import { ClientService } from '../../client.service';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent implements OnInit {

  // client: IClient | undefined;
  get client() {
    return this.clientService.client;
  }

  constructor(
    private clientService: ClientService,
    // private activatedRoute: ActivatedRoute
  ) { 
    // this.getClient(); 
  }

  ngOnInit(): void {
  }

  // getClient(){
  //   // this.client = undefined;
  //   const id = this.activatedRoute.snapshot.params.objectId;
  //   console.log(id);
  //   this.clientService.getClient(id).subscribe(client => this.client = client);
  // }

}
