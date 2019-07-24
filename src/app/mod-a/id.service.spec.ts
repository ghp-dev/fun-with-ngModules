import { TestBed } from '@angular/core/testing';
import { IdService } from './id.service';

describe('IdService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [IdService]
  }));

  it('should be created', () => {
    const service: IdService = TestBed.get(IdService);
    expect(service).toBeTruthy();
  });
});
