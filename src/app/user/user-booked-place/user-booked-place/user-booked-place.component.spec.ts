import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBookedPlaceComponent } from './user-booked-place.component';

describe('UserBookedPlaceComponent', () => {
  let component: UserBookedPlaceComponent;
  let fixture: ComponentFixture<UserBookedPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBookedPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBookedPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
