import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLinhVucComponent } from './add-linh-vuc.component';

describe('AddLinhVucComponent', () => {
  let component: AddLinhVucComponent;
  let fixture: ComponentFixture<AddLinhVucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLinhVucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLinhVucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
