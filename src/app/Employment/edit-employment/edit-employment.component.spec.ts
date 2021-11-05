import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmploymentComponent } from './edit-employment.component';

describe('EditEmploymentComponent', () => {
  let component: EditEmploymentComponent;
  let fixture: ComponentFixture<EditEmploymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmploymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
