import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DimensionReductionComponent } from './dimension-reduction.component';

describe('DimensionReductionComponent', () => {
  let component: DimensionReductionComponent;
  let fixture: ComponentFixture<DimensionReductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DimensionReductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DimensionReductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
