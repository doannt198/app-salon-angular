import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanDuLieuThoComponent } from './gan-du-lieu-tho.component';

describe('GanDuLieuThoComponent', () => {
  let component: GanDuLieuThoComponent;
  let fixture: ComponentFixture<GanDuLieuThoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GanDuLieuThoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GanDuLieuThoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
