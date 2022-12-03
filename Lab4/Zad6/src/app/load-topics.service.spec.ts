import { TestBed } from '@angular/core/testing';

import { LoadTopicsService } from './load-topics.service';

describe('LoadTopicsService', () => {
  let service: LoadTopicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadTopicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
