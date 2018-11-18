import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPaneComponent } from './data-pane.component';

describe('DataPaneComponent', () => {
  let component: DataPaneComponent;
  let fixture: ComponentFixture<DataPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
