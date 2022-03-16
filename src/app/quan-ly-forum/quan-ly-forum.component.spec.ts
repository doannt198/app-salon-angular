import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyForumComponent } from './quan-ly-forum.component';

describe('QuanLyForumComponent', () => {
  let component: QuanLyForumComponent;
  let fixture: ComponentFixture<QuanLyForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuanLyForumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
