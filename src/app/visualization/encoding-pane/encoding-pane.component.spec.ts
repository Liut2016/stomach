import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncodingPaneComponent } from './encoding-pane.component';

describe('EncodingPaneComponent', () => {
  let component: EncodingPaneComponent;
  let fixture: ComponentFixture<EncodingPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncodingPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncodingPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
