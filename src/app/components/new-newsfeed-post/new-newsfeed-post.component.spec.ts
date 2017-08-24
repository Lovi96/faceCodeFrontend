import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNewsfeedPostComponent } from './new-newsfeed-post.component';

describe('NewNewsfeedPostComponent', () => {
  let component: NewNewsfeedPostComponent;
  let fixture: ComponentFixture<NewNewsfeedPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewNewsfeedPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewNewsfeedPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
