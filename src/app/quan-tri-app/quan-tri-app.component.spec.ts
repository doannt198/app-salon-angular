import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanTriAppComponent } from './quan-tri-app.component';

describe('QuanTriAppComponent', () => {
  let component: QuanTriAppComponent;
  let fixture: ComponentFixture<QuanTriAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanTriAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanTriAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
