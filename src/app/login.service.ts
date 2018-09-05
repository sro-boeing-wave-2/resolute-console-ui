import { Injectable } from '@angular/core';
import { of, throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { HttpHeaders } from '@angular/common/http';

import {Headers, Http, HttpModule} from '@angular/http';
import {TokenParams} from './user-login/Classes/TokenParams';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

   AccessToken:string = "";
   constructor(private http : Http) { }

   private TokenAPI = "http://localhost:12345/provideYourTokenAPIhere";

  // login(Username:string, Password:string): Observable<TokenParams>{
  //   var headersForTokenAPI = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
  //   var data = Username + Password;
  //   return this.http.post(this.TokenAPI, data, { headers: headersForTokenAPI}).map(res => res.json());


  // }
   post(form){
    console.log(form)
    return this.http.post("http://172.23.238.235:8081/api/Auth/login", form);
  }

  }
