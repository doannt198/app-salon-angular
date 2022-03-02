import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanDuLieuSalonComponent } from './gan-du-lieu-salon.component';

describe('GanDuLieuSalonComponent', () => {
  let component: GanDuLieuSalonComponent;
  let fixture: ComponentFixture<GanDuLieuSalonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GanDuLieuSalonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GanDuLieuSalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
