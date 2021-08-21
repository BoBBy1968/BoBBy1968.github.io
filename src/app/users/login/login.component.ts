import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

 

    loggingIn(form: NgForm): void {
    if (form.invalid) {
      console.log("The Form is invalid.");
      return;
    }
    // console.log(form.value.email);
    // let login = form.value.email;
    // let password = form.value.password;
    // const data: any { login, password };
    let { login, password } = form.value;
    // console.log(login, password);
    // console.log(form.value);
    // login = "b.a.stanchev@gmail.com";
    this.userService.login({ login, password }).subscribe(
      {
      next: () => {
        // const redirectUrl = this.activatedRoute.snapshot.queryParams.redirectUrl || '';
        // this.router.navigate([redirectUrl]);
        this.router.navigate(['/']);
      },
      error: (err) => { 
        console.log(err);
      }
    });
  }

}
