import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterComponent } from '../../../../src/app/components/atoms/counter/counter.component';
import { signal } from '@angular/core';


describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement; // ayuda con el tipado

  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });


  test('should render h1 with the correct counter value from signal', () => {
    /**
     * Feature: Visualización del contador
     * Scenario: Se proporciona un Signal<number> al componente
     * Given un signal con valor 42
     * When el componente se renderiza
     * Then se debe mostrar un <h1> con el número 42
     */
  
    // Arrange (PREPARAR)
    const valor_entrada = 42;
    const counterSignal = signal(valor_entrada);
    component.counter = counterSignal;
  
    fixture.detectChanges(); // Actualiza el DOM
    const h1 = compiled.querySelector('h1');
  
    // Act (EJECUTAR)
    const contenido_renderizado = h1?.textContent?.trim();
  
    const respuesta_esperada = {
      status: 'ok',
      message: 'El h1 muestra el valor correcto del Signal',
      data: {
        input: valor_entrada,
        output: contenido_renderizado
      }
    };
  
    // Assert (COMPROBAR)
    expect(typeof valor_entrada).toBe('number');
    expect(contenido_renderizado).toBe(valor_entrada.toString());
    expect(respuesta_esperada.data.output).toBe('42');
    console.log(respuesta_esperada);
  });


  test('should update h1 when signal value changes', () => {
    /**
     * Feature: Reactividad del contador
     * Scenario: El valor del Signal cambia después del renderizado
     * Given un Signal con valor inicial 0
     * When el valor del Signal cambia a 10
     * Then el <h1> debe mostrar 10
     */
  
    // Arrange
    const counterSignal = signal(0);
    component.counter = counterSignal;
    fixture.detectChanges();
  
    // Act
    counterSignal.set(10);
    fixture.detectChanges();
    const h1 = compiled.querySelector('h1');
  
    const respuesta_esperada = {
      status: 'ok',
      message: 'El h1 se actualiza correctamente tras el cambio del signal',
      data: {
        input: 10,
        output: h1?.textContent?.trim()
      }
    };
  
    // Assert
    expect(h1?.textContent?.trim()).toBe('10');
    expect(respuesta_esperada.data.output).toBe('10');
    console.log(respuesta_esperada);
  });





// //evaluar solo el comportamiento de la función
//   test('increaseBy debe incrementar basado en el argumento', () => {
//     component.increaseBy(5);
//     expect(component.counter).toBe(5);
//   });

  // test('hacer click en los botones debe incrementar y decrementar en 1', () => {
  //   //estamos evaluando la acción de un elemento html contra nuestro componente propiamente
  //   const buttons = compiled.querySelectorAll('button');
  //   buttons[0].click(); // click en el botón de incrementar
  //   expect(component.counter).toBe(1); // el contador debe ser 1

  //   buttons[1].click(); // click en el botón de decrementar
  //   buttons[1].click(); // click en el botón de decrementar

  //   expect(component.counter).toBe(-1); // el contador debe ser -1
  // });

  // test('cambiar el counter debe de actualizar la etiqueta h1', () => {
  //   // Le voy a aplicar un estimulo al componente, en este caso un cambio de valor
  //   component.increaseBy(10);
  //   // OJO: esperar a que el fixture haga la actualización del DOM
  //   fixture.detectChanges(); // esto es para que el DOM se actualice y se refleje el cambio en el HTML
    


  //   const h1 = compiled.querySelector('h1');
  //   expect(h1?.textContent).toContain('10'); // el texto del h1 debe contener 20
  //   //to Contain: que contenga el valor
  //   //toEqual: que sea igual al valor
  //   //toBe: que sea igual al valor
  // });

  

});