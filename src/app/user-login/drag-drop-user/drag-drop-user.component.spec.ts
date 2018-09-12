import { TestBed, async, inject } from '@angular/core/testing'; 
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DragDropUserComponent } from './drag-drop-user.component';
import { Posts } from '../../models/post.model';
import { SELECT_PANEL_INDENT_PADDING_X } from '@angular/material';
import { injectArgs } from '@angular/core/src/di/injector';

describe('DragDropUserComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [DragDropUserComponent],
      providers: [DragDropUserComponent]
     // .then(() => {
    //component = TestBed.createComponent(DragDropUserComponent).componentInstance;
    });
  });

  // it('should be able to check whether organisation details are getting posted', async(inject([DragDropUserComponent], (component: DragDropUserComponent) => {

  //   const dummyPosts: Posts[] = [
  //     {userid: '1',  body: 'Hi', title: 'Hello'},
  //     {userid: '2', body: 'Hello', title: 'Hi'}
  //   ];

  //   this.component.OnPost({"OrganisationName":"stackroute","email":"stackroute@gmail.in","password":"stackroute1","logoUrl":"logo@stackroute.com"}).subscribe(posts => {
  //     expect(posts).toEqual(dummyPosts);
  //   });
  // })));
});
