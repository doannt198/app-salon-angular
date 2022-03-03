import { TestBed } from '@angular/core/testing';

import { BaocaodoanhthuService } from './baocaodoanhthu.service';

describe('BaocaodoanhthuService', () => {
  let service: BaocaodoanhthuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaocaodoanhthuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
