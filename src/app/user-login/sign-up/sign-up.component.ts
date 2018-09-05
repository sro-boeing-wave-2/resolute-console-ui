import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {SignupService} from '../../signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(
    private router : Router,
    private fb : FormBuilder,
    private _signupService : SignupService ) { }


    signUpForm = this.fb.group({
      'customer_name': new FormControl('', [Validators.required]),
      'email' : new FormControl('', [Validators.required]),
      'Password': new FormControl('', [Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(10)])])
    });

  GenerateAccount():void{
    var a = this.signUpForm.value;
    console.log(a);
    this._signupService.post(a).subscribe(data => console.log(data));
    this.router.navigate(['/userlogin/addagents']);
    }

    get customer_name() {
      return this.signUpForm.get('customer_name');
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
