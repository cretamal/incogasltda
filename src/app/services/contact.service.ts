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

  private url = 'https://public.devfun.cl';
  // private url   = "http://localhost:3000";

  constructor(private http: HttpClient) {}



  sendMessageContact( data: any ): Observable<any[]> {
    const url = `${this.url}/sendMail`;
    return this.http.post<any[]>( url, data );
  }




}
