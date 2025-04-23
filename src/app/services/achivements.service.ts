import { effect, inject, Injectable } from '@angular/core';
import { Achievement } from '../interfaces/achievement';
import { CounterService } from './counter.service';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class AchivementsService {

  private counterService= inject(CounterService);
  private notificationService= inject(NotificationService);
  getAchivements(){
    return this.achivementsReached;
  }
  achivementsReached: Achievement[]=[];
  public achivements: Achievement[] =[ 
    { id: 1, description: 'jugar tu primer escape room', icon:'assets/images/achivements/trophy_8.png', type: 'logro',threshold: 1 },
    { id: 2, description: 'jugar 10 scape rooms', icon:'assets/images/achivements/trophy_1.png', type: 'logro', threshold: 10 },
    { id: 3, description: 'jugar 30 scape rooms', icon:'assets/images/achivements/trophy_2.png', type: 'logro',threshold: 30 },
    { id: 4, description: 'jugar 50 scape rooms', icon:'assets/images/achivements/trophy_3.png', type: 'logro',threshold: 50 },
    { id: 5, description: 'jugar 50 scape rooms', icon:'assets/images/achivements/trophy_7.png', type: 'logro',threshold: 100 },
    { id: 6, description: 'jugar en 3 temáticas distintas', icon:'assets/images/achivements/trophy_5.png', type: 'logro'},
    { id: 7, description: 'jugar una room de terror', icon:'assets/images/achivements/trophy_6.png', type: 'logro'}
  ];

  addAchievement(){
    let counter = this.counterService.count();
    console.log(counter);
    this.achivements.forEach(achievement => {
      if (
        achievement.threshold !== undefined &&                   // Si tiene umbral
        counter >= achievement.threshold &&                      // Si el contador ha alcanzado ese umbral
        !this.achivementsReached.some(a => a.id === achievement.id) // Si aún no ha sido añadido
      ) {
        this.achivementsReached.push(achievement);
        this.notificationService.success('Enhorabuena! Logro desbloqueado', 'LOGRO')
        console.log('🎉 Logro desbloqueado:', achievement.description);
      }
    });
    
  }
  
  constructor() {
    effect(() => {
      const count = this.counterService.count();
      this.addAchievement(); // Evalúa y agrega si toca
    });
  }
}
