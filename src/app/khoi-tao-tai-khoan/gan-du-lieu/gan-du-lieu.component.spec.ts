import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanDuLieuComponent } from './gan-du-lieu.component';

describe('GanDuLieuComponent', () => {
  let component: GanDuLieuComponent;
  let fixture: ComponentFixture<GanDuLieuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GanDuLieuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GanDuLieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
