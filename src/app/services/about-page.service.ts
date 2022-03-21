import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutPageService {
  private url = 'http://localhost:3002';

  constructor(private http: HttpClient) { }

  getDataPage(query:string): Observable<any> {
    const url = `${this.url}/api/abouts${query}`;
    return this.http.get<any>( url );
  }


}
