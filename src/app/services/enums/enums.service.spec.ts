import { TestBed } from '@angular/core/testing';

import { EnumUtils } from './enumUtils';

describe('EnumsService', () => {
  let service: EnumUtils;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnumUtils);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
