import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralFormDialogComponent } from './general-form-dialog.component';

describe('GeneralFormDialogComponent', () => {
  let component: GeneralFormDialogComponent;
  let fixture: ComponentFixture<GeneralFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralFormDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
