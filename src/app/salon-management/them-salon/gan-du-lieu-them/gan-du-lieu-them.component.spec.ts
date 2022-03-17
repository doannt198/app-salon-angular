import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanDuLieuThemComponent } from './gan-du-lieu-them.component';

describe('GanDuLieuThemComponent', () => {
  let component: GanDuLieuThemComponent;
  let fixture: ComponentFixture<GanDuLieuThemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GanDuLieuThemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GanDuLieuThemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
