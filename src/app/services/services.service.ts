import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private url = `${environment.server}`;

  constructor(private http: HttpClient) {}

  findService(query:string): Observable<any> {
    const url = `${this.url}/api/services`;
    return this.http.get<any>( url );
  }


}
