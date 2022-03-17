import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLySalonThemThoComponent } from './quan-ly-salon-them-tho.component';

describe('QuanLySalonThemThoComponent', () => {
  let component: QuanLySalonThemThoComponent;
  let fixture: ComponentFixture<QuanLySalonThemThoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanLySalonThemThoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLySalonThemThoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
