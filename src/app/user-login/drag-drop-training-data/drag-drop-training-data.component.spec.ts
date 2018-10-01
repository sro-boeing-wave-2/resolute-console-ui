import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropTrainingDataComponent } from './drag-drop-training-data.component';

describe('DragDropTrainingDataComponent', () => {
  let component: DragDropTrainingDataComponent;
  let fixture: ComponentFixture<DragDropTrainingDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragDropTrainingDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropTrainingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
