import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  counter = signal(0); 

  increaseCounter(value: number) {
    this.counter.set(this.counter() + value);
  }
  constructor() { }
}
