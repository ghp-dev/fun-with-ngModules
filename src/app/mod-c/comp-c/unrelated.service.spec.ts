import { TestBed } from '@angular/core/testing';

import { UnrelatedService } from './unrelated.service';

describe('UnrelatedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnrelatedService = TestBed.get(UnrelatedService);
    expect(service).toBeTruthy();
  });
});
