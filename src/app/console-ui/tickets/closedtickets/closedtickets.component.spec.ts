import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedticketsComponent } from './closedtickets.component';

describe('ClosedticketsComponent', () => {
  let component: ClosedticketsComponent;
  let fixture: ComponentFixture<ClosedticketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosedticketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
