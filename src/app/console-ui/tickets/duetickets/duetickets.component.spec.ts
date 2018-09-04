import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DueticketsComponent } from './duetickets.component';

describe('DueticketsComponent', () => {
  let component: DueticketsComponent;
  let fixture: ComponentFixture<DueticketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DueticketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DueticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
