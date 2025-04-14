import { inject, Injectable, signal } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  private toastrService = inject(ToastrService);
 private level = signal<number>(0);
 private experience = signal<number>(0);
// Define los umbrales para subir de nivel
private levelThresholds = [0, 100, 250, 500, 1000]; // niveles 1, 2, 3, 4, etc.

 get currentLevel() {
  return this.level.asReadonly(); // acceso solo lectura desde fuera
}
get exp() {
  return this.experience.asReadonly(); // acceso solo lectura desde fuera
}

gainExperience(amount: number) {
  this.experience.update(current => current + amount);
  this.updateLevel(); // cada vez que sube la exp, chequeamos el nivel
}

private updateLevel() {
  const xp = this.experience();
  let newLevel = 0;

  for (let i = 0; i < this.levelThresholds.length; i++) {
    if (xp >= this.levelThresholds[i]) {
      newLevel = i + 1;
    }
  }
  this.toastrService.success(`Alcanzaste el nivel ${newLevel}`, 'Exito')
  this.level.set(newLevel);
}

reset() {
  this.experience.set(0);
  this.level.set(1);
}
}
