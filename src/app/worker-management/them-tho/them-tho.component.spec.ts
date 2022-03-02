import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemThoComponent } from './them-tho.component';

describe('ThemThoComponent', () => {
  let component: ThemThoComponent;
  let fixture: ComponentFixture<ThemThoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemThoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemThoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
