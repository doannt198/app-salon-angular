import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanTriAppChiTietComponent } from './quan-tri-app-chi-tiet.component';

describe('QuanTriAppChiTietComponent', () => {
  let component: QuanTriAppChiTietComponent;
  let fixture: ComponentFixture<QuanTriAppChiTietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanTriAppChiTietComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanTriAppChiTietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
