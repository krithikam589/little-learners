import { TestBed } from '@angular/core/testing';

import { LlSoundEffectService } from './ll-sound-effect.service';

describe('LlSoundEffectService', () => {
  let service: LlSoundEffectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LlSoundEffectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
