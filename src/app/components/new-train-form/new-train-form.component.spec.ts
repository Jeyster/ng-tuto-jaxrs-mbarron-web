import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTrainFormComponent } from './new-train-form.component';

describe('NewTrainFormComponent', () => {
  let component: NewTrainFormComponent;
  let fixture: ComponentFixture<NewTrainFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTrainFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTrainFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
