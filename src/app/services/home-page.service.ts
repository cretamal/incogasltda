import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  private url = 'http://localhost:3002';

  constructor(private http: HttpClient) { }

  getDataPage(query:string): Observable<any> {
    const url = `${this.url}/api/homes${query}`;
    return this.http.get<any>( url );
  }

  getShortCut(query:string): Observable<any> {
    const url = `${this.url}/api/home-pages${query}`;
    return this.http.get<any>( url );
  }


}
