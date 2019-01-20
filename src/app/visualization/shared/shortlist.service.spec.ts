import { TestBed } from '@angular/core/testing';

import { ShortlistService } from './shortlist.service';

describe('ShortlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShortlistService = TestBed.get(ShortlistService);
    expect(service).toBeTruthy();
  });
});
