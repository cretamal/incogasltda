import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private url = environment.server;

  constructor(private http: HttpClient) {
    console.log('url:', this.url);
  }

  getAll(): Observable<any> {
    const url = `${this.url}/contents`;
    return this.http.get<any>( url );
  }

  getContentType(query_type:string): Observable<any> {
    const url = `${this.url}/contents${query_type}`;
    return this.http.get<any>( url );
  }


}
