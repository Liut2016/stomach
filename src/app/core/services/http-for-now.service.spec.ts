import { TestBed, inject } from '@angular/core/testing';

import { HttpForNowService } from '@app/core/services/http-for-now.service';

describe('HttpForNowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpForNowService]
    });
  });

  it('should be created', inject([HttpForNowService], (service: HttpForNowService) => {
    expect(service).toBeTruthy();
  }));
});
