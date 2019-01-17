import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralLisComponent } from './general-lis.component';

describe('GeneralLisComponent', () => {
  let component: GeneralLisComponent;
  let fixture: ComponentFixture<GeneralLisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralLisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralLisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
