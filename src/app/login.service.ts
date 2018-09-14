import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError, Subject } from 'rxjs';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { OrganizationData } from './user-login/organizationData';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  tokenSubject = new BehaviorSubject("");

  getTokenForComponents() {
    return this.tokenSubject.asObservable();
  }

  updateToken(token) {
    this.tokenSubject.next(token);
  }

  constructor(private http: HttpClient) { }

  // loginUrl = Ip of the API Gateway for token generation
  loginUrl: string = "http://35.189.155.116:8081/api/Auth/login";

  getToken(form) {
    // const httpHeader = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json'
    //   })
    // };
    return this.http.post(this.loginUrl, form).pipe(catchError((error: HttpErrorResponse) => throwError(error.status || 'Server error')));
  }

}
