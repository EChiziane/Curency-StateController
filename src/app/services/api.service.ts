import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private API_URL = environment.API_URL;

  constructor(private http: HttpClient, private auth: AuthService) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
      return throwError('Something bad happened; please try again later.');
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${JSON.stringify(error.error)}`);
      return throwError(error.error.error ? error.error : { error: error.error });
    }
  }

  private normalizeUrl(url: string): string {
    if (/^https?:\/\//.test(url)) {
      return url;
    }
    return `${this.API_URL}${url}`;
  }

  public get<T>(url: string) {
    const options = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.auth.getToken()}`
      })
    };

    return this.http.get<T>(this.normalizeUrl(url), options).pipe(
      catchError(this.handleError)
    );
  }

  public post<T>(url: string, data: any) {
    const options = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.auth.getToken()}`,
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<T>(this.normalizeUrl(url), data, options).pipe(
      catchError(this.handleError)
    );
  }

  public put<T>(url: string, data: any) {
    const options = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.auth.getToken()}`,
        'Content-Type': 'application/json'
      })
    };
    return this.http.put<T>(this.normalizeUrl(url), data, options).pipe(
      catchError(this.handleError)
    );
  }

  public delete<T>(url: string) {
    const options = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.auth.getToken()}`
      })
    };

    return this.http.delete<T>(this.normalizeUrl(url), options).pipe(
      catchError(this.handleError)
    );
  }
}
