import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../login.service';
import { TokenParams } from '../Classes/TokenParams';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  token :TokenParams = null;
  unauthorized: string = null;

  //for testing
  @Output() submitted = new EventEmitter();

  constructor(private router : Router, private fb : FormBuilder, private _loginService : LoginService) {}

  loginForm = this.fb.group({
    'EmailId': new FormControl('', [Validators.required]),
    'Password': new FormControl('', [Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(10)])])
  });

  get Username() {
    console.log(this.loginForm.get('EmailId'));
    return this.loginForm.get('EmailId');
  }

  get Password() {
    console.log(this.loginForm.get('Password'));
    return this.loginForm.get('Password');

  }

  LoginToAccount() {
    this._loginService.getToken(this.loginForm.value).subscribe(result => {
      this.token = result['token']; //might need to change this
      // console.log(result);
      this._loginService.updateToken(this.token);
      if(this.token === null) {
        // console.log(this.token);
        this.unauthorized = "Invalid user or Session Timed Out";
      } else {
        // console.log(this.token);
        this.router.navigate(['/console/home']);
      }
    });
  }

  ngOnInit() {
  }

  // for testing
  onSubmit({ Username, Password }) {
    this.submitted.emit({ Username, Password });
  }
}
