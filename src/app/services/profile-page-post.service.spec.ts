import { TestBed, inject } from '@angular/core/testing';

import { ProfilePagePostService } from './profile-page-post.service';

describe('ProfilePagePostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfilePagePostService]
    });
  });

  it('should be created', inject([ProfilePagePostService], (service: ProfilePagePostService) => {
    expect(service).toBeTruthy();
  }));
});
