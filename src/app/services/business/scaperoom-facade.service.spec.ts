import { TestBed } from '@angular/core/testing';

import { ScaperoomFacadeService } from './scaperoom-facade.service';

describe('ScaperoomFacadeService', () => {
  let service: ScaperoomFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScaperoomFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
