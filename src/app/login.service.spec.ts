import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LoginService } from './login.service';
import { Loginmodel } from './models/post.model';
import { HttpClientModule } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

describe('LoginService', () => {
  let service: LoginService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginService]
    });

    service = TestBed.get(LoginService);
  });

  it('should be able to check whether login details are getting posted', () => {
    const dummyPosts: Loginmodel[] = [
      {Username: '1', Password: 'Hi'},
      {Username: '1', Password: 'Hi'}
    ];

    service.post({'Username':'sharath','Password':'abc123ABC'}).subscribe(posts => {
      expect(posts).toEqual(dummyPosts);
    });
  });
});
