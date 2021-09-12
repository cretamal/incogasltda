import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {
  private url = environment.server;

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    const url = `${this.url}/sub-categories`;
    return this.http.get<any>( url );
  }

  findOne(id:number): Observable<any> {
    const url = `${this.url}/sub-categories/${id}`;
    return this.http.get<any>( url );
  }

}
