import { TestBed } from '@angular/core/testing';

import { UserServeService } from './user-serve.service';

describe('UserServeService', () => {
  let service: UserServeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserServeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
