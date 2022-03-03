import { TestBed } from '@angular/core/testing';

import { AddbookingService } from './addbooking.service';

describe('AddbookingService', () => {
  let service: AddbookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddbookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
