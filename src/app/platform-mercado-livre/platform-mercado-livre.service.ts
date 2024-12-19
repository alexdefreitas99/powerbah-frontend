import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlatformMercadoLivreService {

  constructor(private http: HttpClient) { }

  findByName(): Observable<Object> {
    return this.http.get<Object>(`item/v3/itens/base/autocomplete?nome`);
  }
}
