import { TestBed } from '@angular/core/testing';

import { LoadTripsService } from './load-trips.service';

describe('LoadTripsService', () => {
  let service: LoadTripsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadTripsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
