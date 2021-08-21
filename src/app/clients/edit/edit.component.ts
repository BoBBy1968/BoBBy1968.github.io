import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IClient } from 'src/app/interfaces/client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  client: IClient | undefined;
  toEdit: boolean = false;

  constructor(
    private clientService: ClientService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.getClient();
   }

  ngOnInit(): void {
  }

  edit(form: NgForm){
    if (form.invalid) {
      console.log("The form is not valid!");
      return;
    }
    let { firstName, lastName, egn, address, abonatNumber, principal, interest, invoices } = form.value;
    console.log(firstName, lastName, egn, address, abonatNumber);
    console.log(form.value);

    const id = this.activatedRoute.snapshot.params.objectId;
    this.clientService.editClient({ firstName, lastName, egn, address, abonatNumber, principal, interest, invoices }, id).subscribe({
      next: () => {
        this.router.navigate(['/clients']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getClient(){
    // this.client = undefined;
    const id = this.activatedRoute.snapshot.params.objectId;
    this.clientService.getClient(id).subscribe(client => this.client = client);
  }

}
