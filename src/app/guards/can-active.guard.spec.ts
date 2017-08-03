import { TestBed, async, inject } from '@angular/core/testing';

import { MyGuard } from './can-active.guard';

describe('MyGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyGuard]
    });
  });

  it('should ...', inject([MyGuard], (guard: MyGuard) => {
    expect(guard).toBeTruthy();
  }));
});
