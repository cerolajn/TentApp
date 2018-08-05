import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptySearchingResultsComponent } from './empty-searching-results.component';

describe('EmptySearchingResultsComponent', () => {
  let component: EmptySearchingResultsComponent;
  let fixture: ComponentFixture<EmptySearchingResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptySearchingResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptySearchingResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
