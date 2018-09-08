import { TestBed, inject, async } from '@angular/core/testing';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { LoginPageComponent } from './login-page.component';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Isolated', () => {
  let subject: LoginPageComponent;
  //let fixture: ComponentFixture<LoginPageComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ LoginPageComponent ],
  //     providers: [LoginService]
  //   })
  //   .compileComponents();
  // }));

  beforeEach(() => {
    //fixture = TestBed.createComponent(LoginPageComponent);
    //component = fixture.componentInstance;
    //loginService = TestBed.get(LoginService);

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, RouterModule, RouterTestingModule, HttpClientTestingModule],
      providers: [LoginPageComponent]
    });
    // fixture = TestBed.createComponent(LoginPageComponent);
    // component = fixture.componentInstance;
    // component.ngOnInit();
  });

  beforeEach(inject([LoginPageComponent], (loginPage: LoginPageComponent) => {
    subject = loginPage;
  }));

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('form invalid when empty', () => {
  //   expect(component.loginForm.valid).toBeFalsy();
  // });

  // it('username field validity', () => {
  //   let errors = {};
  //   let username = component.loginForm.controls['Username'];
  //   expect(username.valid).toBeFalsy();

  //   errors = username.errors || {};
  //   expect(errors['required']).toBeTruthy();
  // });

  // it('password field validity', () => {
  //   let errors = {};
  //   let password = component.loginForm.controls['Password'];
  //   expect(password.valid).toBeFalsy();

  //   errors = password.errors || {};
  //   expect(errors['required']).toBeTruthy();
  // });

  it('should send credentials on submit', () => {
    subject.submitted.subscribe(({ Username, Password }) => {
      expect(Username).toEqual('expectedUsername');
      expect(Password).toEqual('expectedPassword');
    });

    subject.onSubmit({ Username: 'expectedUsername', Password: 'expectedPassword' });
  });

});
