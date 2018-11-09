import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralExpansionPanelComponent } from './general-expansion-panel.component';

describe('GeneralExpansionPanelComponent', () => {
  let component: GeneralExpansionPanelComponent;
  let fixture: ComponentFixture<GeneralExpansionPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralExpansionPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
