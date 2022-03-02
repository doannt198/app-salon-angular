import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemBookingComponent } from './them-booking.component';

describe('ThemBookingComponent', () => {
  let component: ThemBookingComponent;
  let fixture: ComponentFixture<ThemBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
