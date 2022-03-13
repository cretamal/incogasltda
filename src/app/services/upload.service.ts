import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private url   = "http://localhost:3002";

  constructor(private http: HttpClient) { }

  uploadFile( file: any ): Observable<HttpEvent<{}>> {
    console.log('file', file);
    const url = `${this.url}/upload`;
    const formData: FormData = new FormData();
    formData.append('files', file);
    const req = new HttpRequest( 'POST', url, formData, {
        reportProgress: true,
        responseType: 'text'
    } );
    return this.http.request( req );
  }



}
