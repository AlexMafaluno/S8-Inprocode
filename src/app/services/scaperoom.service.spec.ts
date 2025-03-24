import { TestBed } from '@angular/core/testing';

import { ScaperoomService } from './scaperoom.service';

describe('ScaperoomService', () => {
  let service: ScaperoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScaperoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
