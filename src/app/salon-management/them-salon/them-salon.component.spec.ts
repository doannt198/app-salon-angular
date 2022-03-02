import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemSalonComponent } from './them-salon.component';

describe('ThemSalonComponent', () => {
  let component: ThemSalonComponent;
  let fixture: ComponentFixture<ThemSalonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemSalonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemSalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
