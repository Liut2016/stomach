import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotPanelComponent } from './plot-panel.component';

describe('PlotPanelComponent', () => {
  let component: PlotPanelComponent;
  let fixture: ComponentFixture<PlotPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
