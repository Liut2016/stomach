import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralComponentsListComponent } from './general-components-list.component';

describe('GeneralComponentsListComponent', () => {
  let component: GeneralComponentsListComponent;
  let fixture: ComponentFixture<GeneralComponentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralComponentsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralComponentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
