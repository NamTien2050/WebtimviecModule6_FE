import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentPostListComponent } from './recruitment-post-list.component';

describe('RecruitmentPostListComponent', () => {
  let component: RecruitmentPostListComponent;
  let fixture: ComponentFixture<RecruitmentPostListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruitmentPostListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitmentPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
