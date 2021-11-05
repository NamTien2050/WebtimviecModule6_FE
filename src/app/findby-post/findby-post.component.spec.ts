import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindbyPostComponent } from './findby-post.component';

describe('FindbyPostComponent', () => {
  let component: FindbyPostComponent;
  let fixture: ComponentFixture<FindbyPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindbyPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindbyPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
