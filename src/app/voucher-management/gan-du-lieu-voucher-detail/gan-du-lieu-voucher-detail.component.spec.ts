import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanDuLieuVoucherDetailComponent } from './gan-du-lieu-voucher-detail.component';

describe('GanDuLieuVoucherDetailComponent', () => {
  let component: GanDuLieuVoucherDetailComponent;
  let fixture: ComponentFixture<GanDuLieuVoucherDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GanDuLieuVoucherDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GanDuLieuVoucherDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
