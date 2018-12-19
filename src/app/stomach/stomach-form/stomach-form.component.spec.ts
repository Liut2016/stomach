import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StomachFormComponent } from './stomach-form.component';

describe('StomachFormComponent', () => {
  let component: StomachFormComponent;
  let fixture: ComponentFixture<StomachFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StomachFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StomachFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
