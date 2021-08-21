import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IClient } from '../interfaces/client';

let apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  client: IClient | null | undefined = undefined;

  constructor(
    private http: HttpClient,
  ) { }

  create(data: {
    firstName: string; lastName: string; egn: string; address: string; abonatNumber: string;
    principal: string; interest: string; invoices: string;
  }) {
    return this.http.post<IClient>(`${apiURL}/data/clients`, data);
    // .pipe(
    //   tap((client) => this.client = client)
    // );
  }

  // updateProfile(data: { username: string; email: string; tel: string; }) {
  //   return this.http.put<IUser>(`${apiURL}/users/profile`, data, { withCredentials: true })
  //     .pipe(
  //       tap((user) => this.user = user)
  //     );
  // }

  editClient(data: {
    firstName: string; lastName: string; egn: string; address: string; abonatNumber: string
    principal: string; interest: string; invoices: string;
  }, id: string) {
    return this.http.put<IClient>(`${apiURL}/data/clients/${id}`, data);
    // .pipe(
    //   tap((client) => this.client = client)
    // );
  }

  getAllClients() {
    return this.http.get<IClient[]>(`${apiURL}/data/clients?sortBy=created%20desc&pageSize=100`);
  }

  // loadTheme(id: string) {
  //   return this.http.get<ITheme>(`http://localhost:3000/api/themes/${id}`, { withCredentials: true });
  // }
  getClient(id: string) {
    return this.http.get<IClient>(`${apiURL}/data/clients/${id}`)
    .pipe(
      tap((client) => this.client = client)
    );
  }
}
