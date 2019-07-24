import { TestBed } from '@angular/core/testing';
import {MigratedIdService} from './migrated-id.service';


describe('MigratedIdService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [MigratedIdService]

  }));

  it('should be created', () => {
    const service: MigratedIdService = TestBed.get(MigratedIdService);
    expect(service).toBeTruthy();
  });
});
