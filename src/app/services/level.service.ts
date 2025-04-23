import { inject, Injectable, signal } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  private toastrService = inject(ToastrService);
  private readonly experienceKey = 'user-experience-count'
  private readonly levelKey = 'user-level-count';
 private level = signal<number>(this.getStoredCount(this.levelKey));
 private experience = signal<number>(this.getStoredCount(this.experienceKey));

// Define los umbrales para subir de nivel
private levelThresholds = [10, 100, 250, 500, 1000]; // niveles 1, 2, 3, 4, etc.
private lastThresholdReached = 0;

private getStoredCount(storageKey:string):number{
  const stored = localStorage.getItem(storageKey);
  return stored ? +stored : 0;
}
setExperience(newExperience: number) {
  localStorage.setItem(this.experienceKey,newExperience.toString());
  this.experience.set(newExperience);
}

setLevel(newLevel: number) {
  console.log('Setting level:', newLevel)
  localStorage.setItem(this.levelKey,newLevel.toString());
  this.level.set(newLevel);
}


 get currentLevel() {
  return this.level.asReadonly(); // acceso solo lectura desde fuera
}
get exp() {
  return this.experience.asReadonly(); // acceso solo lectura desde fuera
}

gainExperience(value: number) {
  const newValue = this.experience() + value;
  localStorage.setItem(this.experienceKey, newValue.toString());
  this.experience.set(newValue);
  this.updateLevel(); // cada vez que sube la exp, chequeamos el nivel
}

private updateLevel() {
  const xp = this.experience();
  let newLevel = 0;
  let lastThreshold = 0;
  for (let i = 0; i < this.levelThresholds.length; i++) {
    if (xp >= this.levelThresholds[i]) {
      newLevel = i + 1;
      lastThreshold = this.levelThresholds[i];
    }
  }
   // Mostrar el mensaje SOLO si es un nuevo threshold
   if (lastThreshold > this.lastThresholdReached) {
  this.toastrService.success(`Alcanzaste el nivel ${newLevel}`, 'Exito')
  this.lastThresholdReached = lastThreshold;
}
this.setLevel(newLevel);
}

reset() {
  localStorage.removeItem(this.experienceKey);
  this.setExperience(0);
  this.setLevel(0);
}
}
