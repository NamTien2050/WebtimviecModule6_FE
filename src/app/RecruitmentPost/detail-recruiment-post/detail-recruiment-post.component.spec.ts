import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRecruimentPostComponent } from './detail-recruiment-post.component';

describe('DetailRecruimentPostComponent', () => {
  let component: DetailRecruimentPostComponent;
  let fixture: ComponentFixture<DetailRecruimentPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailRecruimentPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailRecruimentPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
