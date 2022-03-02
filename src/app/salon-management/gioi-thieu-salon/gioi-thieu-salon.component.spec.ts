import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GioiThieuSalonComponent } from './gioi-thieu-salon.component';

describe('GioiThieuSalonComponent', () => {
  let component: GioiThieuSalonComponent;
  let fixture: ComponentFixture<GioiThieuSalonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GioiThieuSalonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GioiThieuSalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
