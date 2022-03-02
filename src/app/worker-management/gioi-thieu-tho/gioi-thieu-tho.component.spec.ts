import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GioiThieuThoComponent } from './gioi-thieu-tho.component';

describe('GioiThieuThoComponent', () => {
  let component: GioiThieuThoComponent;
  let fixture: ComponentFixture<GioiThieuThoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GioiThieuThoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GioiThieuThoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
