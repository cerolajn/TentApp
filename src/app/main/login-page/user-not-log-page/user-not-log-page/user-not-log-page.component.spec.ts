import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNotLogPageComponent } from './user-not-log-page.component';

describe('UserNotLogPageComponent', () => {
  let component: UserNotLogPageComponent;
  let fixture: ComponentFixture<UserNotLogPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNotLogPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNotLogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
