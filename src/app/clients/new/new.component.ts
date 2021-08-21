import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {

  constructor(
    private clientService: ClientService,
    private router: Router,
  ) { }


  create(form: NgForm){
    if (form.invalid) {
      console.log("The form is not valid!");
      return;
    }

    let { firstName, lastName, egn, address, abonatNumber, principal, interest, invoices } = form.value;
    console.log(firstName, lastName, egn, address, abonatNumber);

    this.clientService.create({ firstName, lastName, egn, address, abonatNumber, principal, interest, invoices }).subscribe({
      next: () => {
        this.router.navigate(['/clients']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
