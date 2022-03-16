import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemThongBaoComponent } from './them-thong-bao.component';

describe('ThemThongBaoComponent', () => {
  let component: ThemThongBaoComponent;
  let fixture: ComponentFixture<ThemThongBaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemThongBaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemThongBaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
