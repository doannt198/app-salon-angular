import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLySalonThoComponent } from './quan-ly-salon-tho.component';

describe('QuanLySalonThoComponent', () => {
  let component: QuanLySalonThoComponent;
  let fixture: ComponentFixture<QuanLySalonThoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanLySalonThoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLySalonThoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
