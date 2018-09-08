import { TestBed, inject, async } from '@angular/core/testing';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import { SignUpComponent } from './sign-up.component';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Isolated', () => {
  let subject: SignUpComponent;

  beforeEach(() => {
      TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, RouterModule, RouterTestingModule, HttpClientTestingModule],
      providers: [SignUpComponent]
    });
  });

  beforeEach(inject([SignUpComponent], (signUp: SignUpComponent) => {
    subject = signUp;
  }));


  it('should add new user on signing up', () => {
    subject.submitted.subscribe(({ customer_name, email, Password }) => {
      expect(customer_name).toEqual('expectedCustomername');
      expect(email).toEqual('expectedEmail');
      expect(Password).toEqual('expectedPassword');
    });

    subject.onSubmit({ customer_name: 'expectedCustomername', email: 'expectedEmail', Password: 'expectedPassword' });
  });

});
