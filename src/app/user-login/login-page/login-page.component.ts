import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../login.service';
import { LocalStorageService } from 'ngx-webstorage';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  token;
  unauthorized: string = null;

  //for testing
  @Output() submitted = new EventEmitter();

  constructor(private router: Router, private fb: FormBuilder, private _loginService: LoginService, private localStorage : LocalStorageService) { }

  loginForm = this.fb.group({
    //change this to EmailId later
    'Username': new FormControl('', [Validators.required]),
    'Password': new FormControl('', [Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(14)])])
  });

  get Username() {
    console.log(this.loginForm.get('Username'));
    return this.loginForm.get('Username');
  }

  get Password() {
    console.log(this.loginForm.get('Password'));
    return this.loginForm.get('Password');
  }

  LoginToAccount() {
    console.log(this.loginForm.value);
    this._loginService.getToken(this.loginForm.value).subscribe(result => {
      this.token = result.toString(); //might need to change this
      this.localStorage.store('token', this.token);
      if (this.token) {
        this.router.navigate(['/console/home']);
      }
    }, error => {
      if (error) {
        console.log('Error');
        this.unauthorized = "Invalid user or Session Timed Out";
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
