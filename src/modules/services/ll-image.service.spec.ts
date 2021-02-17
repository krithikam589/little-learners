import { TestBed } from '@angular/core/testing';

import { LlImageService } from './ll-image.service';

describe('LlImageService', () => {
  let service: LlImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LlImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
