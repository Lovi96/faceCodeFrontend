import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePagePostComponent } from './profile-page-post.component';

describe('ProfilePagePostComponent', () => {
  let component: ProfilePagePostComponent;
  let fixture: ComponentFixture<ProfilePagePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePagePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePagePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
