import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncodingPanelComponent } from './encoding-panel.component';

describe('EncodingPanelComponent', () => {
  let component: EncodingPanelComponent;
  let fixture: ComponentFixture<EncodingPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncodingPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncodingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
