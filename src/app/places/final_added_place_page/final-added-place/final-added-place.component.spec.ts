import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalAddedPlaceComponent } from './final-added-place.component';

describe('FinalAddedPlaceComponent', () => {
  let component: FinalAddedPlaceComponent;
  let fixture: ComponentFixture<FinalAddedPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalAddedPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalAddedPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
