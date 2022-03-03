import { TestBed } from '@angular/core/testing';

import { BaocaobookingService } from './baocaobooking.service';

describe('BaocaobookingService', () => {
  let service: BaocaobookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaocaobookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
