import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from '../../../src/app/components/counter/counter.component';

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
//evaluar solo el comportamiento de la función
  test('increaseBy debe incrementar basado en el argumento', () => {
    component.increaseBy(5);
    expect(component.counter).toBe(5);
  });

  test('hacer click en los botones debe incrementar y decrementar en 1', () => {
    //estamos evaluando la acción de un elemento html contra nuestro componente propiamente
    const buttons = compiled.querySelectorAll('button');
    buttons[0].click(); // click en el botón de incrementar
    expect(component.counter).toBe(1); // el contador debe ser 1

    buttons[1].click(); // click en el botón de decrementar
    buttons[1].click(); // click en el botón de decrementar

    expect(component.counter).toBe(-1); // el contador debe ser -1
  });

  test('cambiar el counter debe de actualizar la etiqueta h1', () => {
    // Le voy a aplicar un estimulo al componente, en este caso un cambio de valor
    component.increaseBy(10);
    // OJO: esperar a que el fixture haga la actualización del DOM
    fixture.detectChanges(); // esto es para que el DOM se actualice y se refleje el cambio en el HTML
    


    const h1 = compiled.querySelector('h1');
    expect(h1?.textContent).toContain('10'); // el texto del h1 debe contener 20
    //to Contain: que contenga el valor
    //toEqual: que sea igual al valor
    //toBe: que sea igual al valor
  });

  

});