import { inject, Injectable, signal } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
private toastrService = inject(ToastrService);
  private readonly storageKey = 'user-photo-count';
  private photoCount = signal<number>(this.getStoredCount());
  private counterThresholds = [10, 25, 50, 75, 99, 149]; // divisones:
  private lastThresholdReached = 0;
  private currentDivisionId = 0;

  divisions: {
    id: number;
    name: string;
    icon: string; // puede ser un emoji o ruta de imagen
    threshold: number;
  }[] = [
    { id: 1, name: 'Candado de madera', icon: '🔒', threshold: 10 },
    { id: 2, name: 'Candado de bronce', icon: '🟤', threshold: 25 },
    { id: 3, name: 'Candado de plata', icon: '⚪', threshold: 50 },
    { id: 4, name: 'Candado de oro', icon: '🟡', threshold: 75 },
    { id: 5, name: 'Candado de diamante', icon: '💎', threshold: 99 },
    { id: 6, name: 'Candado legendario', icon: '🔥', threshold: 149 }
  ]

  getCurrentDivision(roomsJugados: number) {
    return this.divisions
      .filter(div => roomsJugados >= div.threshold)
      .sort((a, b) => b.threshold - a.threshold)[0]; // devuelve la más alta alcanzada
  }

  checkForDivisionUpgrade(roomsJugados: number) {
    const newDivision = this.getCurrentDivision(roomsJugados);
    if (newDivision && newDivision.id !== this.currentDivisionId) {
      this.currentDivisionId = newDivision.id;
      this.toastrService.success(
        `¡Ascendiste a ${newDivision.name}!`,
        `${newDivision.icon} Nueva división`
      );
    }
  }
  


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
    this.checkForDivisionUpgrade(newValue);
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
    console.log(this.lastThresholdReached);
  }
  this.photoCount.set(newCount);
}

  reset() {
    localStorage.removeItem(this.storageKey);
    this.photoCount.set(0);
  }



}
