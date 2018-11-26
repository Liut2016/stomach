import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralStepperComponent } from './general-stepper.component';

describe('GeneralStepperComponent', () => {
  let component: GeneralStepperComponent;
  let fixture: ComponentFixture<GeneralStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
