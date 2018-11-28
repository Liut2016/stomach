import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowUpMammaryOverviewComponent } from './follow-up-mammary-overview.component';

describe('FollowUpMammaryOverviewComponent', () => {
  let component: FollowUpMammaryOverviewComponent;
  let fixture: ComponentFixture<FollowUpMammaryOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowUpMammaryOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowUpMammaryOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
