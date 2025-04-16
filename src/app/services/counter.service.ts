import { inject, Injectable, signal } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
private toastrService = inject(ToastrService);
  private readonly storageKey = 'user-photo-count';
  private photoCount = signal<number>(this.getStoredCount());
  private counterThresholds = [8, 25, 50, 75, 99, 149]; // niveles 1, 2, 3, 4, etc.
  private lastThresholdReached = 0;
  private getStoredCount():number{
    const stored = localStorage.getItem(this.storageKey);
    return stored ? +stored : 0;
  }


  get count() {
    return this.photoCount.asReadonly(); // acceso solo lectura desde fuera
  }

  setCount(newCount: number) {
    localStorage.setItem(this.storageKey,newCount.toString());
    this.photoCount.set(newCount);
  }

  increment(value: number) {
    const newValue = this.photoCount() + value;
    localStorage.setItem(this.storageKey, newValue.toString());
    this.photoCount.set(newValue);
    this.updateCount();
  }

  private updateCount() {
    const xp = this.photoCount();
    let newCount = 0;
  
    let lastThreshold = 0;
    for (let i = 0; i < this.counterThresholds.length; i++) {
      if (xp >= this.counterThresholds[i]) {
        newCount = i + 1;
        lastThreshold = this.counterThresholds[i];
      }
    }
    // Mostrar el mensaje SOLO si es un nuevo threshold
  if (lastThreshold > this.lastThresholdReached) {
    this.toastrService.success(`Alcanzaste un total de ${lastThreshold} scapeRooms`, 'Nuevo logro');
    this.lastThresholdReached = lastThreshold;
  }
  this.photoCount.set(newCount);
}

  reset() {
    localStorage.removeItem(this.storageKey);
    this.photoCount.set(0);
  }


}
