import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFeedPostComponent } from './newsfeed-post.component';

describe('NewsFeedPostComponent', () => {
  let component: NewsFeedPostComponent;
  let fixture: ComponentFixture<NewsFeedPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsFeedPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFeedPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
