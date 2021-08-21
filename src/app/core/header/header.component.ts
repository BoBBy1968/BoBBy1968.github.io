import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/users/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  get username(): string{
    return this.userService.user?.name || 'NoUser';
  }

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  logout(): void{
    this.userService.logout().subscribe(()=>{
      this.router.navigate(['/']);
    });
  }

}
