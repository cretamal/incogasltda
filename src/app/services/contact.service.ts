import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client';
import { Order } from '../models/order';

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
  private url = `${environment.server}/api`;

  constructor(private http: HttpClient) {}

  sendMessageContact( data: any ): Observable<any[]> {
    const url = `${this.sendMail}/sendMail`;
    return this.http.post<any[]>( url, data );
  }



  saveOrder( payload: Order ): Observable<Order> {
    const url = `${this.url}/orders`;
    return this.http.post<Order>( url, payload );
  }




}
