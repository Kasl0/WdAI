import { TestBed } from '@angular/core/testing';

import { ChosenTopicService } from './chosen-topic.service';

describe('ChosenTopicService', () => {
  let service: ChosenTopicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChosenTopicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
