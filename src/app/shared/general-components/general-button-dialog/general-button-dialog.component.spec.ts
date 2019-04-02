import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralButtonDialogComponent } from './general-button-dialog.component';

describe('GeneralButtonDialogComponent', () => {
  let component: GeneralButtonDialogComponent;
  let fixture: ComponentFixture<GeneralButtonDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralButtonDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralButtonDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
