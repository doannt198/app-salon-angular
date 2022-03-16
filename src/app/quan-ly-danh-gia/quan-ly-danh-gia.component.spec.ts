import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyDanhGiaComponent } from './quan-ly-danh-gia.component';

describe('QuanLyDanhGiaComponent', () => {
  let component: QuanLyDanhGiaComponent;
  let fixture: ComponentFixture<QuanLyDanhGiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanLyDanhGiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyDanhGiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
