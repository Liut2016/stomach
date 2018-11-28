import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotPaneComponent } from './plot-pane.component';

describe('PlotPaneComponent', () => {
  let component: PlotPaneComponent;
  let fixture: ComponentFixture<PlotPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
