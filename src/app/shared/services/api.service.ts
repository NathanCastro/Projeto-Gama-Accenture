import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable()
export class ApiService {
  
  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {}

  get(url: string, query?: HttpParams): Observable<any> {    
    const headers = this.createAuthorizationHeader();
    return this.http.get(url, {
      headers: headers,
      params: query
    });
  }

  post(url: string, data: any): Observable<any> {
    const headers = this.createAuthorizationHeader();
    return this.http.post(url, data, {
      headers: headers
    });
  }

  put(url: string, data?: any): Observable<any> {
    const headers = this.createAuthorizationHeader();
    return this.http.put(url, data, {
      headers: headers,
    });
  }

  delete(url: string, query?: HttpParams, data?: any): Observable<any> {
    const headers = this.createAuthorizationHeader();
    return this.http.delete(url, {
      headers: headers,
      params: query
    });
  }

  createAuthorizationHeader() {
    let headers = new HttpHeaders();
    const token = this.authService.getAuthorizationHeaderValue()
    if(token) {
      headers = headers.append('Authorization', token); 
    }
    headers = headers.append('Content-Type', 'application/json');

    return headers;
  }
}
