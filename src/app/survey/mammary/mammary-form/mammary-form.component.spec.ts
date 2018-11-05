import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MammaryFormComponent } from './mammary-form.component';

describe('MammaryFormComponent', () => {
  let component: MammaryFormComponent;
  let fixture: ComponentFixture<MammaryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MammaryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MammaryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
