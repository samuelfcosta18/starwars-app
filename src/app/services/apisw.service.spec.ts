import { TestBed } from '@angular/core/testing';

import { ApiswService } from './apisw.service';

describe('ApiswService', () => {
  let service: ApiswService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiswService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
