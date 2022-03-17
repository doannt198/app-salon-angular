import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GioiThieuThemComponent } from './gioi-thieu-them.component';

describe('GioiThieuThemComponent', () => {
  let component: GioiThieuThemComponent;
  let fixture: ComponentFixture<GioiThieuThemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GioiThieuThemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GioiThieuThemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
