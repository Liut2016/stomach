import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MammaryOverviewComponent } from './mammary-overview.component';

describe('MammaryOverviewComponent', () => {
  let component: MammaryOverviewComponent;
  let fixture: ComponentFixture<MammaryOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MammaryOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MammaryOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
