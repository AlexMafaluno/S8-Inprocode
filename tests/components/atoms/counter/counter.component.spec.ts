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

});