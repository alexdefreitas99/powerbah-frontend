import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientModel } from './client-model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  CLIENTS_URL = 'https://localhost:32770/api/clients/';

  findById(id: number): Observable<ClientModel> {
    return this.http.get<ClientModel>(`${this.CLIENTS_URL}${id}`);
  }

  create(client: ClientModel): Observable<ClientModel> {
    return this.http.post<ClientModel>(`${this.CLIENTS_URL}`, client);
  }
}
