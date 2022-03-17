import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanDuLieuThoThemThoComponent } from './gan-du-lieu-tho-them-tho.component';

describe('GanDuLieuThoThemThoComponent', () => {
  let component: GanDuLieuThoThemThoComponent;
  let fixture: ComponentFixture<GanDuLieuThoThemThoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GanDuLieuThoThemThoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GanDuLieuThoThemThoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
