import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenticketsComponent } from './opentickets.component';

describe('OpenticketsComponent', () => {
  let component: OpenticketsComponent;
  let fixture: ComponentFixture<OpenticketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenticketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
