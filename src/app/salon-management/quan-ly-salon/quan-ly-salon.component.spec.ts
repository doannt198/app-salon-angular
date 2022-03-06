import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLySalonComponent } from './quan-ly-salon.component';

describe('QuanLySalonComponent', () => {
  let component: QuanLySalonComponent;
  let fixture: ComponentFixture<QuanLySalonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanLySalonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLySalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
