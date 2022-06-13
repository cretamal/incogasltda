import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AboutPageService {
  private url = `${environment.server}`;

  constructor(private http: HttpClient) { }

  getDataPage(query:string): Observable<any> {
    const url = `${this.url}/api/abouts${query}`;
    return this.http.get<any>( url );
  }


}
