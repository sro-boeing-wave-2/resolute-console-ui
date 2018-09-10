import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

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
  loginUrl: string = "http://172.23.238.235:8081/api/Auth/login";

  getToken(form) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post(this.loginUrl, form, httpOptions);
  }

}
