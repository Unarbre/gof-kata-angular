import { TestBed } from '@angular/core/testing';

import { GenerationHttpService } from './generation-http.service';

describe('GameOfLifeHttpServiceService', () => {
  let service: GenerationHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerationHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
