import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietVoucherComponent } from './chi-tiet-voucher.component';

describe('ChiTietVoucherComponent', () => {
  let component: ChiTietVoucherComponent;
  let fixture: ComponentFixture<ChiTietVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChiTietVoucherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
