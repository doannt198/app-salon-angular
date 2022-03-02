import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhoiTaoTaiKhoanComponent } from './khoi-tao-tai-khoan.component';

describe('KhoiTaoTaiKhoanComponent', () => {
  let component: KhoiTaoTaiKhoanComponent;
  let fixture: ComponentFixture<KhoiTaoTaiKhoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KhoiTaoTaiKhoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KhoiTaoTaiKhoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
