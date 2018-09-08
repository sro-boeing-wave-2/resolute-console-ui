import { Injectable } from '@angular/core';
import { of, throwError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { HttpHeaders } from '@angular/common/http';

import {Headers, Http, HttpModule } from '@angular/http';
import {TokenParams} from './user-login/Classes/TokenParams';
import { Token } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

   AccessToken:string = "";
   constructor(private http : HttpClient) { }

   private TokenAPI = "http://localhost:12345/provideYourTokenAPIhere";

   post(form){
    console.log(form)
    var k = this.http.post("http://172.23.238.235:8081/api/Auth/login", form);
    return k;
  }

  }
