import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemVoucherComponent } from './them-voucher.component';

describe('ThemVoucherComponent', () => {
  let component: ThemVoucherComponent;
  let fixture: ComponentFixture<ThemVoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemVoucherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
