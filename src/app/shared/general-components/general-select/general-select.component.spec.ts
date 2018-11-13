import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralSelectComponent } from './general-select.component';

describe('GeneralSelectComponent', () => {
  let component: GeneralSelectComponent;
  let fixture: ComponentFixture<GeneralSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
