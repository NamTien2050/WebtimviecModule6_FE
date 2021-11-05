import { TestBed } from '@angular/core/testing';

import { RecruitmentPostService } from './recruitment-post.service';

describe('RecruitmentPostService', () => {
  let service: RecruitmentPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecruitmentPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
