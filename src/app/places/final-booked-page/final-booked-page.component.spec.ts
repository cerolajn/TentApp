import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalBookedPageComponent } from './final-booked-page.component';

describe('FinalBookedPageComponent', () => {
  let component: FinalBookedPageComponent;
  let fixture: ComponentFixture<FinalBookedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalBookedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalBookedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
