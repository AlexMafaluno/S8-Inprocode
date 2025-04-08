import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent{
  // Definimos una señal para el contador
  // La señal es una forma de manejar el estado reactivo en Angular
  // En este caso, la señal se inicializa con un valor de 0
  counter: Signal<number> = signal(0); // Inicializamos el contador en 0

private counterService = inject(CounterService); // Inyectamos el servicio CounterService

increaseBy(): void {
  this.counterService.increaseCounter(this.counter()); // Llamamos al servicio para aumentar el contador
}
}
