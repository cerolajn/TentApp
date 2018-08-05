import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNoBookedPlacesComponent } from './user-no-booked-places-.component';

describe('UserNoBookedPlacesComponent', () => {
  let component: UserNoBookedPlacesComponent;
  let fixture: ComponentFixture<UserNoBookedPlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNoBookedPlacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNoBookedPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
