import { Component, inject, Input, OnInit, signal, Signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent{

@Input() counter!: Signal<number>; 
get count(): number {
  return this.counter();
}
}
