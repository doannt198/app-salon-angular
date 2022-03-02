import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinhVucDichVuComponent } from './linh-vuc-dich-vu.component';

describe('LinhVucDichVuComponent', () => {
  let component: LinhVucDichVuComponent;
  let fixture: ComponentFixture<LinhVucDichVuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinhVucDichVuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinhVucDichVuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
