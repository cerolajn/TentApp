import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileSettingPageComponent } from './user-profile-setting-page.component';

describe('UserProfileSettingPageComponent', () => {
  let component: UserProfileSettingPageComponent;
  let fixture: ComponentFixture<UserProfileSettingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileSettingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileSettingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
