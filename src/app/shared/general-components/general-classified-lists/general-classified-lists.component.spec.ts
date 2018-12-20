import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralClassifiedListsComponent } from './general-classified-lists.component';

describe('GeneralClassifiedListsComponent', () => {
  let component: GeneralClassifiedListsComponent;
  let fixture: ComponentFixture<GeneralClassifiedListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralClassifiedListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralClassifiedListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
