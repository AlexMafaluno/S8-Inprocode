import { TestBed } from '@angular/core/testing';

import { ScaperoomService } from '../../src/app/services/scaperoom.service';
import { provideHttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

describe('ScaperoomService', () => {
  let service: ScaperoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
              ScaperoomService,
              new ActivatedRoute(),
              provideHttpClient(), // 👈 Esta es la clave
            ]
    });
    service = TestBed.inject(ScaperoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
