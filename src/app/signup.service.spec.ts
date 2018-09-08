import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SignupService } from './signup.service';
import { Posts } from './models/post.model';

describe('SignupService', () => {
  let service: SignupService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SignupService]
    });

    service = TestBed.get(SignupService);
  });

  // it('should be created', inject([SignupService], (service: SignupService) => {
  //   expect(service).toBeTruthy();
  // }));

  it('should be able to check whether user details are getting posted', () => {
    const dummyPosts: Posts[] = [
      {userid: '1', body: 'Hi', title: 'Hello'},
      {userid: '2', body: 'Hello', title: 'Hi'}
    ];

    service.post({'customer_name':'a','email':'b','Password':'abc123ABC'}).subscribe(posts => {
      //expect(posts.length).toBe(2);
      expect(posts).toEqual(dummyPosts);
    });
  });
});
