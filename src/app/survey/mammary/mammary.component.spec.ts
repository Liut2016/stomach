import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MammaryComponent } from './mammary.component';

describe('MammaryComponent', () => {
  let component: MammaryComponent;
  let fixture: ComponentFixture<MammaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MammaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MammaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
