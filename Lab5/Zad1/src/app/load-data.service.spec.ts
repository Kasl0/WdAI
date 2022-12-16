import { TestBed } from '@angular/core/testing';

import { LoadPostsService } from './load-data.service';

describe('LoadPostsService', () => {
  let service: LoadPostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadPostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
