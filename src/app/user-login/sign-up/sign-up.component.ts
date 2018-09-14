import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {SignupService} from '../../signup.service';
import { Router } from '@angular/router';
import { OrganizationData } from '../organizationData';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private router : Router,
    private fb : FormBuilder,
    private signUpService : SignupService ) { }

    data: OrganizationData;

    signUpForm = this.fb.group({
      'organisationDisplayName': new FormControl('', [Validators.required]),
      'organisationName': new FormControl('', [Validators.required]),
      'logoUrl': new FormControl('', [Validators.required]),
      'email' : new FormControl('', [Validators.required]),
      'Password': new FormControl('', [Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(10)])])
    });

  GenerateAccount():void {

    var a = this.signUpForm.value;
    console.log("This is the form data coming " + a);
    this.signUpService.post(a).subscribe(data => {
      this.data = data.json();
      this.signUpService.updateData(this.data); //why is this function called?
      console.log(data.json());
    });
    this.router.navigate(['/userlogin/addagents']);
    }

    get customer_name() {
      return this.signUpForm.get('organisationName');
    }

    get email() {
      return this.signUpForm.get('email');
    }

    get Password() {
      return this.signUpForm.get('Password');
    }

  ngOnInit() {
  }

}
