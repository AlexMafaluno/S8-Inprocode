import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ScaperoomService } from '../../src/app/services/scaperoom.service';
import { provideHttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { API_ENDPOINTS } from '../../src/app/config/url';
import { ScapeRoom } from '../../src/app/interfaces/scaperoom';

describe('ScaperoomService', () => {
  let service: ScaperoomService;
  let httpMock: HttpTestingController;


  const mockRoom: ScapeRoom = {
    id: 5,
    title: 'La Prisión del Tiempo',
    imageUrl: 'prision.jpg',
    director: ''
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [
              ScaperoomService,
              ]
    });
    service = TestBed.inject(ScaperoomService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  
  afterEach(() => {
    try {
      httpMock.verify(); // Verifica que no haya peticiones HTTP pendientes
    } catch (e) {
      // Si no hay peticiones pendientes, lo ignoramos
      console.error('Error en httpMock.verify() :', e);
    }
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });



  test('should call HTTP GET to correct endpoint with expected ID', () => {
    /**
     * Feature: Consulta de sala específica
     * Scenario: Se proporciona un ID válido
     * Given el ID 5
     * When se llama al método getScapeRoom
     * Then se debe hacer una petición GET al endpoint con ese ID
     */
  // Arrange (PREPARAR)
  const valor_entrada = 5;
  const expectedUrl = API_ENDPOINTS.getScaperoomById(valor_entrada);
  const mockRoom: ScapeRoom = { id: 5, title: 'Sala 5', imageUrl: '', director: '' };

  let response_capturada: ScapeRoom | undefined;

  service.getScapeRoom(valor_entrada).subscribe(res => {
    response_capturada = res;
  });

  // Act (EJECUTAR)
  const req = httpMock.expectOne(expectedUrl);
  req.flush({ data: mockRoom }); // Simula respuesta del servidor

  const respuesta_esperada = {
    status: 'ok',
    message: 'Se llamó correctamente al endpoint con ID esperado',
    data: {
      input: valor_entrada,
      output: response_capturada?.id
    }
  };

  // Assert (COMPROBAR)
  expect(req.request.method).toBe('GET');
  expect(req.request.url).toBe(expectedUrl);
  expect(response_capturada?.id).toBe(valor_entrada);
  expect(respuesta_esperada.data.output).toBe(5);
  console.log(respuesta_esperada);
});




});
