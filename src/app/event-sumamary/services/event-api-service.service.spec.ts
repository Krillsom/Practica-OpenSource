import { TestBed } from '@angular/core/testing';

import { EventApiServiceService } from './event-api-service.service';

describe('EventApiServiceService', () => {
  let service: EventApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
