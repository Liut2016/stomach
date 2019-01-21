import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StomachFilterComponent } from './stomach-filter.component';

describe('StomachFilterComponent', () => {
  let component: StomachFilterComponent;
  let fixture: ComponentFixture<StomachFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StomachFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StomachFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
