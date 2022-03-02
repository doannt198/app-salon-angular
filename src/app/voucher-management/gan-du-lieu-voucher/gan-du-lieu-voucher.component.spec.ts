import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanDuLieuVoucherComponent } from './gan-du-lieu-voucher.component';

describe('GanDuLieuVoucherComponent', () => {
  let component: GanDuLieuVoucherComponent;
  let fixture: ComponentFixture<GanDuLieuVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GanDuLieuVoucherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GanDuLieuVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
