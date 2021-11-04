import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmploymentAuthenticatedComponent } from './list-employment-authenticated.component';

describe('ListEmploymentAuthenticatedComponent', () => {
  let component: ListEmploymentAuthenticatedComponent;
  let fixture: ComponentFixture<ListEmploymentAuthenticatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEmploymentAuthenticatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmploymentAuthenticatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
