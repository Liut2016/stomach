import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralComponentsMdComponent } from './general-components-md.component';

describe('GeneralComponentsMdComponent', () => {
  let component: GeneralComponentsMdComponent;
  let fixture: ComponentFixture<GeneralComponentsMdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralComponentsMdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralComponentsMdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
