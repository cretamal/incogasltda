import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  private url   = "http://localhost:3002";

  constructor(private http: HttpClient) {}



  sendMessageContact( data: any ): Observable<any[]> {
    const url = `${this.sendMail}/sendMail`;
    return this.http.post<any[]>( url, data );
  }

  saveContact( payload: any ): Observable<any[]> {
    const url = `${this.url}/contacts`;
    return this.http.post<any[]>( url, payload );
  }




}
