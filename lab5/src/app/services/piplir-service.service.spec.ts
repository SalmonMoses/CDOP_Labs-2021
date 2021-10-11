import { TestBed } from '@angular/core/testing';

import { PiplirService } from './piplir.service';

describe('PiplirServiceService', () => {
  let service: PiplirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PiplirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
