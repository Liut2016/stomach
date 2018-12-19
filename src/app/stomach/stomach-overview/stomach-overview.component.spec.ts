import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StomachOverviewComponent } from './stomach-overview.component';

describe('StomachOverviewComponent', () => {
  let component: StomachOverviewComponent;
  let fixture: ComponentFixture<StomachOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StomachOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StomachOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
