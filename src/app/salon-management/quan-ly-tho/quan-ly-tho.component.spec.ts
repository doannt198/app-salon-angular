import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyThoComponent } from './quan-ly-tho.component';

describe('QuanLyThoComponent', () => {
  let component: QuanLyThoComponent;
  let fixture: ComponentFixture<QuanLyThoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanLyThoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyThoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
