import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralInputConditionComponent } from './general-input-condition.component';

describe('GeneralInputConditionComponent', () => {
  let component: GeneralInputConditionComponent;
  let fixture: ComponentFixture<GeneralInputConditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralInputConditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralInputConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
