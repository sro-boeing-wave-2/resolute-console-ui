import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {LoginService} from '../login.service';
import {TokenParams} from '../Classes/TokenParams';
import { Token } from '@angular/compiler';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  tokenParam :TokenParams;

  // DoLogin():void

  constructor(
    private router : Router,
    private fb : FormBuilder,
    private _loginService : LoginService,
  ) {
    console.log(this.Username);
  }

  loginForm = this.fb.group({
    'Username': new FormControl('', [Validators.required]),
    'Password': new FormControl('', [Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(10)])])
  });

  LoginToAccount(): void {
    var a = this.loginForm.value;
    console.log(this.Username);
    console.log(a);
    this._loginService.post(a);
  }


  get Username() {
    return this.loginForm.get('Username');
  }

  get Password() {
    return this.loginForm.get('Password');
  }

  ngOnInit() {
  }

}
