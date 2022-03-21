import { TestBed } from '@angular/core/testing';

import { NumbersUtils } from './numbersUtils';

describe('NumbersService', () => {
  let service: NumbersUtils;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumbersUtils);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
