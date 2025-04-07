import { Component, inject, OnInit, Signal } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent{
 

private counterService = inject(CounterService); // Inyectamos el servicio CounterService

counter: Signal<number> = inject(CounterService).counterSignal;

increaseBy(value: number): void {
  this.counterService.increaseCounter(value); // Llamamos al servicio para aumentar el contador
}
}
