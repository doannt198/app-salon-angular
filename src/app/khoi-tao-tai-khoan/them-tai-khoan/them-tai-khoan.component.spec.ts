import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemTaiKhoanComponent } from './them-tai-khoan.component';

describe('ThemTaiKhoanComponent', () => {
  let component: ThemTaiKhoanComponent;
  let fixture: ComponentFixture<ThemTaiKhoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemTaiKhoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemTaiKhoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
