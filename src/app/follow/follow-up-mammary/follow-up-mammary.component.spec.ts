import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowUpMammaryComponent } from './follow-up-mammary.component';

describe('FollowUpMammaryComponent', () => {
  let component: FollowUpMammaryComponent;
  let fixture: ComponentFixture<FollowUpMammaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowUpMammaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowUpMammaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
