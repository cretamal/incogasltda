import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private url = 'http://localhost:4003';

  constructor(private http: HttpClient) {}

  sendMessageContact( data: any ): Observable<any[]> {
    const url = `${this.url}/sendMail`;
    return this.http.post<any[]>( url, data );
  }




}
