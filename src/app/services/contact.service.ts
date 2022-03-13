import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client';
import { Order } from '../models/order';
import qs from 'qs';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      "Access-Control-Allow-Origin": "*",

    } )
  };

  private sendMail = 'https://public.devfun.cl';
  private url   = "http://localhost:3002/api";

  constructor(private http: HttpClient) {}






  sendMessageContact( data: any ): Observable<any[]> {
    const url = `${this.sendMail}/sendMail`;
    return this.http.post<any[]>( url, data );
  }

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

  saveOrder( payload: Order ): Observable<Order> {
    const url = `${this.url}/orders`;
    return this.http.post<Order>( url, payload );
  }




}
