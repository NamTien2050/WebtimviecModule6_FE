import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllListPostComponent } from './all-list-post.component';

describe('AllListPostComponent', () => {
  let component: AllListPostComponent;
  let fixture: ComponentFixture<AllListPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllListPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllListPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
