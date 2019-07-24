import { TestBed } from '@angular/core/testing';

import { SharedIdService } from './shared-id.service';

describe('SharedIdService', () => {
  beforeEach(() => TestBed.configureTestingModule({
  }));

  it('should be created', () => {
    const service: SharedIdService = TestBed.get(SharedIdService);
    expect(service).toBeTruthy();
  });
});
