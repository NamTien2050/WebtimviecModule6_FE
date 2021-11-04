import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmploymentUnauthenticatedComponent } from './list-employment-unauthenticated.component';

describe('ListEmploymentUnauthenticatedComponent', () => {
  let component: ListEmploymentUnauthenticatedComponent;
  let fixture: ComponentFixture<ListEmploymentUnauthenticatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEmploymentUnauthenticatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmploymentUnauthenticatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
