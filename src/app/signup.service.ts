import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  url : string ="http://172.23.238.225:5000/api/Signup"
  post(form){
    console.log(form)
   var k = this.http.post(this.url, form);
   return k;
  }
  constructor(private http : HttpClient) { }
}
