import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRecruitmentPostComponent } from './create-recruitment-post.component';

describe('CreateRecruitmentPostComponent', () => {
  let component: CreateRecruitmentPostComponent;
  let fixture: ComponentFixture<CreateRecruitmentPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRecruitmentPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRecruitmentPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
