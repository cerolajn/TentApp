import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Place } from './places.component';

describe('Places', () => {
  let component: Place;
  let fixture: ComponentFixture<Place>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Place ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Place);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
