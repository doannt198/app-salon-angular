import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietThongBaoComponent } from './chi-tiet-thong-bao.component';

describe('ChiTietThongBaoComponent', () => {
  let component: ChiTietThongBaoComponent;
  let fixture: ComponentFixture<ChiTietThongBaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChiTietThongBaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietThongBaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
