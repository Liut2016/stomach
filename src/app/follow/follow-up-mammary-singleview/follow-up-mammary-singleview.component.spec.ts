import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowUpMammarySingleviewComponent } from './follow-up-mammary-singleview.component';

describe('FollowUpMammarySingleviewComponent', () => {
  let component: FollowUpMammarySingleviewComponent;
  let fixture: ComponentFixture<FollowUpMammarySingleviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowUpMammarySingleviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowUpMammarySingleviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
