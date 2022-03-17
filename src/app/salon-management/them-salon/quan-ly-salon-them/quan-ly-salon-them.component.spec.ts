import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLySalonThemComponent } from './quan-ly-salon-them.component';

describe('QuanLySalonThemComponent', () => {
  let component: QuanLySalonThemComponent;
  let fixture: ComponentFixture<QuanLySalonThemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanLySalonThemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLySalonThemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
