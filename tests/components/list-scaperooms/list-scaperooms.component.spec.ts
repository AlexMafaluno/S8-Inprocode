import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListScaperoomsComponent } from '../../../src/app/components/list-scaperooms/list-scaperooms.component';
import { ScaperoomService } from '../../../src/app/services/scaperoom.service';
import { ScapeRoom } from '../../../src/app/interfaces/scaperoom';
import { of } from 'rxjs';
import { provideHttpClient } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, input } from '@angular/core';

describe('Test for grid always returns 3 columns', () => {
  let component: ListScaperoomsComponent;
  let fixture: ComponentFixture<ListScaperoomsComponent>;
  let compiled: HTMLElement;

  const mockRooms: ScapeRoom[] = [
    { id: 1, title: 'Room 1', director:"", imageUrl: 'img1.jpg' },
    { id: 2, title: 'Room 2',director:"", imageUrl: 'img2.jpg' },
    { id: 3, title: 'Room 3',director:"", imageUrl: 'img3.jpg' }
  ];

  //Y lo inyectas en tu servicio mock:
  const mockService = {
    getAllScapeRooms: () => of(mockRooms)
  };


  
  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      providers: [
                    ScaperoomService,
                    provideHttpClient(), // 👈 Esta es la clave
                    { provide: ScaperoomService, useValue: mockService }
                    ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // Para ignorar <app-card>
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListScaperoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });



  test('should create', () => {
    expect(component).toBeTruthy();
  });

  
  
  
  test('should return fizz when render more than 3 columns', () => {
    //Gherking test
            /**
             * Scenario: Anchura divisible por 3
             * Given un número 10
             * When el número es procesado
             * Then se muestra "ko"
             */

            // Arrange: Preparar el escenario
let valor_entrada = 10;
let respuesta_esperada = {
  status: 'ko',
  message: 'El numero es divisible por 2',
  data: {
    input: 5,
    output: 'Fizz'
  }
}
            // Act: ejecutar el escenario
  //  let resultado = component.processNumber(valor_entrada);
            // Assert: comprobar el escenario
   // expect(typeof resultado).toBe('number');// valida que input sea un número
    //expect(resultado).toEqual(respuesta_esperada); // valida estructura de respuesta
    //expect(resultado.data.output).toBe('Fizz'); // valida que output sea Fizz
  });

test('should return Buzz when render less than 3 columns', () => {
  //Gherking test
  /**
   * Scenario: Anchura divisible por 2
   * Given un número 10
   * When el número es procesado
   * Then se muestra "Buzz"
   */

 // Arrange: Preparar el escenario
let valor_entrada = 10;
let respuesta_esperada = {
  status: 'ko',
  message: 'El numero no es divisible por 5',
data: {
    input: 2,
    output: 'Buzz'
  }
}
            // Act: ejecutar el escenario
   // let resultado = component.processNumber(valor_entrada);
            // Assert: comprobar el escenario
         //   expect(typeof resultado).toBe('number');// valida que input sea un número
     //       expect(resultado).toEqual(respuesta_esperada); // valida estructura de respuesta
       //     expect(resultado.data.output).toBe('Buzz'); // valida que output sea Buzz
})



test('returns FizzBuzz when multiple of 3', () => {
  //Gherking test
  /**
   * Scenario: Número(ancho) divisible por 3
   * Given un número 100
   * When el número es procesado
   * Then se muestra "FizzBuzz"
   */
});

test('should render at least 3 cards', () => {
 //Gherking test
  /**
   * Scenario: El componente se renderiza con tres columnas
   * Given que hay 3 scaperooms cargados
   * When el componente se inicializa
   * Then el contenedor padre usa grid con 3 columnas y muestra 3 cards
   */


  
  // Arrange
  const cards = compiled.querySelectorAll('app-card');
  let valor_entrada = 3;
let respuesta_esperada = {
  status: 'ok',
  message: 'El contenedor padre usa grid con 3 columnas',
    data: {
    input: 3,
    output: '3 cards'
  }
}
// Act: ejecutar el escenario

  // Aquí no es necesario hacer nada, ya que el fixture.detectChanges() ya se llamó en beforeEach
  // y el componente ya está renderizado con los datos de mockService.

// Assert: comprobar el escenario
  expect(typeof valor_entrada).toBe('number');// valida que input sea un número
  expect(respuesta_esperada).toEqual(respuesta_esperada); // valida estructura de respuesta
  expect(respuesta_esperada.data.output).toBe('3 cards'); // valida que output sea 3 cards
  expect(cards.length).toBe(3);
});


test('parent container should use grid layout with 3 columns', () => {
  const parentEl = compiled.querySelector('.parent') as HTMLElement;
  const style = window.getComputedStyle(parentEl);

  // Esto depende de si tu entorno de test interpreta los estilos
  const columns = style.gridTemplateColumns.split(' ').length;

  //Assert: comprobar el escenario
  expect(style.display).toBe('grid');
  expect(parentEl).toBeTruthy();
  expect(columns).toBe(3);
});




test('should render at least 3 columns', () => {
  // Arrange
  const parentEl = compiled.querySelector('.parent') as HTMLElement;
  const styles = getComputedStyle(parentEl);
  const gridTemplate = styles.gridTemplateColumns;

  
  const numColumns = gridTemplate.split(' ').length;

// Act: ejecutar el escenario

  // Aquí no es necesario hacer nada, ya que el fixture.detectChanges() ya se llamó en beforeEach
  // y el componente ya está renderizado con los datos de mockService.

// Assert: comprobar el escenario
  expect(parentEl).toBeTruthy();
  expect(numColumns).toBe(3); // Verifica que haya 3 columnas definidas
});

});
