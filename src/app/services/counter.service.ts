import { computed, effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private photoCount = signal<number>(15);
// Nueva señal: detecta nivel actual
  level = computed(() => this.checkLevel(this.photoCount()));

  get count() {
    return this.photoCount.asReadonly(); // acceso solo lectura desde fuera
  }
  constructor() {
    // Este effect se dispara cada vez que cambia el nivel
    effect(() => {
      const newLevel = this.level();
      this.onLevelChanged(newLevel);
    });
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


  checkLevel(value: number): string {
    if (value <= 10) {
      return 'Candado de madera';
    } else if (value <= 25) {
      return 'Candado de bronce';
    }else if (value <= 50) {
      return 'Candado de hierro';
    } else if (value <= 75) {
      return 'Candado de plata';
    }else if (value < 100) {
      return 'Candado de oro';
    }else if (value < 150) {
      return  'Candado de cristal';
    } else {
      return 'Candado místico';	
    }
  }

 private onLevelChanged(level: string) {
  // Aquí puedes disparar efectos: sonidos, animaciones, logs, etc.
    console.log('Nivel cambiado a:', level);
    // Ejemplo: lanzar una animación o cambiar un estado global
  }
}