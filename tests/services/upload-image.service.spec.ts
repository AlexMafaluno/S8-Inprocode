import { TestBed } from '@angular/core/testing';

import { UploadImageService } from '../../src/app/services/upload-image.service';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';

describe('UploadImageService', () => {
  let service: UploadImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UploadImageService,
        provideHttpClient(), // 👈 Esta es la clave
      ]
    });
    service = TestBed.inject(UploadImageService);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });


  test('debe de traer información de la API', () => {
});
});

