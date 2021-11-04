import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRecruitmentPostComponent } from './detail-recruitment-post.component';

describe('DetailRecruitmentPostComponent', () => {
  let component: DetailRecruitmentPostComponent;
  let fixture: ComponentFixture<DetailRecruitmentPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailRecruitmentPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailRecruitmentPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
