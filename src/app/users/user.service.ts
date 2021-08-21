import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { IUser } from '../interfaces/user';


const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: IUser | null| undefined = undefined;
  

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(
    private http: HttpClient
  ) { }


  login(data: {login: string; password: string}) {
    return this.http.post<IUser>(`${apiURL}/users/login`, data, { withCredentials: false })
      .pipe(
        tap((user) => this.user = user),
        // sessionStorage.setItem('email', this.user?.email),
      );
  }

  logout() {
    return this.http.get<IUser>(`${apiURL}/users/logout`)
      .pipe(
        tap(() => this.user = undefined)
      );
  }

  register(data: { name: string; email: string; password: string }) {
    return this.http.post<IUser>(`${apiURL}/users/register`, data, { withCredentials: false })
      .pipe(
        tap((user) => this.user = user)
      );
  }
  
}
