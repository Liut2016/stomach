import { TestBed, inject } from '@angular/core/testing';

import { AuthorityService } from './authority.service';

describe('AuthorityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthorityService]
    });
  });

  it('should be created', inject([AuthorityService], (service: AuthorityService) => {
    expect(service).toBeTruthy();
  }));
});
