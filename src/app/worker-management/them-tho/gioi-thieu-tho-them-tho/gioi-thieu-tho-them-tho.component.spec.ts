import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GioiThieuThoThemThoComponent } from './gioi-thieu-tho-them-tho.component';

describe('GioiThieuThoThemThoComponent', () => {
  let component: GioiThieuThoThemThoComponent;
  let fixture: ComponentFixture<GioiThieuThoThemThoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GioiThieuThoThemThoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GioiThieuThoThemThoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
