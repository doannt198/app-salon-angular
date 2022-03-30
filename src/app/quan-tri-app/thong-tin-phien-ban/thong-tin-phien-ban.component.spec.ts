import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThongTinPhienBanComponent } from './thong-tin-phien-ban.component';

describe('ThongTinPhienBanComponent', () => {
  let component: ThongTinPhienBanComponent;
  let fixture: ComponentFixture<ThongTinPhienBanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThongTinPhienBanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThongTinPhienBanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
