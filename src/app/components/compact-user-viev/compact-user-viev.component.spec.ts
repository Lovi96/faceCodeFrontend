import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompactUserVievComponent } from './compact-user-viev.component';

describe('CompactUserVievComponent', () => {
  let component: CompactUserVievComponent;
  let fixture: ComponentFixture<CompactUserVievComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompactUserVievComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompactUserVievComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
