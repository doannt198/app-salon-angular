import { TestBed } from '@angular/core/testing';

import { KhoitaotaikhoanService } from './khoitaotaikhoan.service';

describe('KhoitaotaikhoanService', () => {
  let service: KhoitaotaikhoanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KhoitaotaikhoanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
