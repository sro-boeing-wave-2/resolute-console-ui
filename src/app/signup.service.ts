import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs';
import { OrganizationData } from './user-login/organizationData';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private customerData: OrganizationData;

  getData() {
    console.log("GETDATA");
    var k = this.customerData;
    console.log(k);
    return(k);
  }

  updateData(updatedData: OrganizationData) {
    console.log(updatedData);
    this.customerData = updatedData;
  }

  url : string ="http://35.221.125.153:8082/api/Signup"
  post(form){
    console.log(form)
    return this.http.post(this.url, form);
  }
  constructor(private http : Http) { }
}
