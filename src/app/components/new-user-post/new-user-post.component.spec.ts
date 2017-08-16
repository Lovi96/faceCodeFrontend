import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserPostComponent } from './new-user-post.component';

describe('NewUserPostComponent', () => {
  let component: NewUserPostComponent;
  let fixture: ComponentFixture<NewUserPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUserPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
