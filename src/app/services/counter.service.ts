import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private photoCount = signal<number>(0);

  get count() {
    return this.photoCount.asReadonly(); // acceso solo lectura desde fuera
  }

  setCount(newCount: number) {
    this.photoCount.set(newCount);
  }

  increment(value: number) {
    console.log('Incrementando contador...');
    this.photoCount.update(count => count + value);
  }

  reset() {
    this.photoCount.set(0);
  }
}
