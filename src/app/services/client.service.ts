import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as qs from 'qs';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private url   = "http://localhost:3002/api";


  constructor(
    private http: HttpClient
  ) {}

  save( payload: Client ): Observable<Client> {
    const url = `${this.url}/clients`;
    return this.http.post<Client>( url, payload );
  }

  getUniqueClient( filter: any ): Observable<any> {
    const query = qs.stringify({
      filters: {
        keyID: {
          $eq: filter,
        },
      },
      populate: '*'
    },{
      encodeValuesOnly: true,
    });


    const url = `${this.url}/clients?${query}`;
    return this.http.get<any>( url );
  }


  update( payload: Client, id: any ): Observable<Client> {
    const url = `${this.url}/clients/${id}`;
    return this.http.post<Client>( url, payload );
  }



}
