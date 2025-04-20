import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListScaperoomsComponent } from '../../../src/app/components/list-scaperooms/list-scaperooms.component';
import { ScaperoomService } from '../../../src/app/services/scaperoom.service';
import { ScapeRoom } from '../../../src/app/interfaces/scaperoom';
import { of } from 'rxjs';
import { provideHttpClient } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, input, output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

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
  const mockActivatedRoute = {
    snapshot: {
      paramMap: {
        get: (key: string) => '1' // Devuelve '1' si pides un parámetro tipo id
      }
    }
  };

  
  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      imports: [
        ToastrModule.forRoot()  // 👈 esto es clave, proporciona el ToastConfig
      ],
      providers: [
                    ScaperoomService,
                    provideHttpClient(), // 👈 Esta es la clave
                    { provide: ScaperoomService, useValue: mockService },
                    { provide: ActivatedRoute, useValue: mockActivatedRoute }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // Para ignorar <app-card>
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListScaperoomsComponent);
    component = fixture.componentInstance;

     // Simular que recibe los scaperooms
     component.listScapeRooms = mockRooms;

    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });






  test('should create', () => {
    expect(component).toBeTruthy();
  });

  
  
  
//   // test('should return fizz when render more than 3 columns', () => {
//     //Gherking test
//             /**
//              * Scenario: Anchura divisible por 3
//              * Given un número 10
//              * When el número es procesado
//              * Then se muestra "ko"
//              */

//             // Arrange: Preparar el escenario
// // let valor_entrada = 10;
// // let respuesta_esperada = {
// //   status: 'ko',
// //   message: 'El numero es divisible por 2',
// //   data: {
// //     input: 5,
// //     output: 'Fizz'
// //   }
// // }
//             // Act: ejecutar el escenario
//   //  let resultado = component.processNumber(valor_entrada);
//             // Assert: comprobar el escenario
//    // expect(typeof resultado).toBe('number');// valida que input sea un número
//     //expect(resultado).toEqual(respuesta_esperada); // valida estructura de respuesta
//     //expect(resultado.data.output).toBe('Fizz'); // valida que output sea Fizz
//   });

// test('should return Buzz when render less than 3 columns', () => {
//   //Gherking test
//   /**
//    * Scenario: Anchura divisible por 2
//    * Given un número 10
//    * When el número es procesado
//    * Then se muestra "Buzz"
//    */

//  // Arrange: Preparar el escenario
// let valor_entrada = 10;
// let respuesta_esperada = {
//   status: 'ko',
//   message: 'El numero no es divisible por 5',
// data: {
//     input: 2,
//     output: 'Buzz'
//   }
// }
//             // Act: ejecutar el escenario
//    // let resultado = component.processNumber(valor_entrada);
//             // Assert: comprobar el escenario
//          //   expect(typeof resultado).toBe('number');// valida que input sea un número
//      //       expect(resultado).toEqual(respuesta_esperada); // valida estructura de respuesta
//        //     expect(resultado.data.output).toBe('Buzz'); // valida que output sea Buzz
// })



// test('returns FizzBuzz when multiple of 3', () => {
//   //Gherking test
//   /**
//    * Scenario: Número(ancho) divisible por 3
//    * Given un número 100
//    * When el número es procesado
//    * Then se muestra "FizzBuzz"
//    */
// });

// test('should render at least 3 cards', () => {
  
//   // Arrange
//   const cards = compiled.querySelectorAll('app-card');
//   let valor_entrada = 3;

// let respuesta_esperada = {
//   status: 'ok',
//   message: 'El contenedor padre usa grid con 3 columnas',
//     data: {
//     input: 3,
//     output: '3 cards'
//   }
// }
// // Act: ejecutar el escenario

// // Assert: comprobar el escenario
//   expect(typeof valor_entrada).toBe('number');// valida que input sea un número
//   expect(respuesta_esperada).toEqual(respuesta_esperada); // valida estructura de respuesta
//   expect(respuesta_esperada.data.output).toBe('3 cards'); // valida que output sea 3 cards
//   expect(cards.length).toBe(3);
// });


test('should render at least 3 items inside the grid container', () => {
   // Arrange
   let valor_entrada = 3;

   const parentEl = compiled.querySelector('.parent') as HTMLElement;
   const gridItems = parentEl.querySelectorAll('app-card, app-achivement-card');
  
 // Act
 const cantidad_renderizada = gridItems.length;


let respuesta_esperada = {
  status: 'ok',
  message: 'El contenedor padre usa grid con 3 columnas',
  data: {
    input: valor_entrada,
    output: `${cantidad_renderizada} cards`
  }
};
// Assert

expect(parentEl).toBeTruthy();
  expect(typeof valor_entrada).toBe('number');
  expect(cantidad_renderizada).toBe(valor_entrada);


  expect(respuesta_esperada.data.output).toBe('3 cards');
  console.log(respuesta_esperada);
});





test('should render app-achivement-card if type is "logro"', () => {
  
  
  //Feature: Renderizado de cards especiales
  // Scenario: El tipo del ítem es "logro"
  // * Given una lista con un item cuyo type es "logro"
  // * When el componente se renderiza
  // * Then se debe mostrar un componente <app-achivement-card>
  
 //Arrange  PREPARAR
 let valor_entrada = 1;
 component.listScapeRooms = [{ id: 99, title: 'Logro Supremo', type: 'logro', imageUrl: '', director: '' }];
 fixture.detectChanges(); // cuando cambia el HTML esperar a que fixture haga la acctualiación del DOM


  //Act   //EJECUTAR
  const logroCard = compiled.querySelectorAll('app-achivement-card');
  let cantidad_renderizada = logroCard.length;

  let respuesta_esperada = {
    status: 'ok',
    message: 'El componente es de type logro',
    data: {
      input: valor_entrada,
      output: `${cantidad_renderizada} app-achivement-card`
    }
  }
  //Assert  //COMPROBAR
  expect(typeof valor_entrada).toBe('number');
  expect(cantidad_renderizada).toBe(valor_entrada);
  expect(respuesta_esperada.data.output).toBe('1 app-achivement-card');
  console.log(respuesta_esperada);

});



test('should render app-card if type is not "logro"', () => {
  /**
   * Feature: Renderizado de cards normales
   * Scenario: El tipo del ítem es diferente de "logro"
   * Given una lista con un item cuyo type es "aventura"
   * When el componente se renderiza
   * Then se debe mostrar un componente <app-card>
   */

  // Arrange
  let valor_entrada = 1;
  component.listScapeRooms = [{ id: 101, title: 'Sala Aventura', type: 'aventura', imageUrl: '', director: '' }];
  fixture.detectChanges();

  // Act
  const normalCard = compiled.querySelectorAll('app-card');
  let cantidad_renderizada = normalCard.length;

  let respuesta_esperada = {
    status: 'ok',
    message: 'El componente es de type normal',
    data: {
      input: valor_entrada,
      output: `${cantidad_renderizada} app-card`
    }
  }
  // Assert
  expect(typeof valor_entrada).toBe('number');
  expect(cantidad_renderizada).toBe(valor_entrada);
  expect(respuesta_esperada.data.output).toBe('1 app-card');
  console.log(respuesta_esperada);
});
});
