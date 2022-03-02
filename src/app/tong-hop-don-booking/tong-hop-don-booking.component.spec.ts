import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TongHopDonBookingComponent } from './tong-hop-don-booking.component';

describe('TongHopDonBookingComponent', () => {
  let component: TongHopDonBookingComponent;
  let fixture: ComponentFixture<TongHopDonBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TongHopDonBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TongHopDonBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
