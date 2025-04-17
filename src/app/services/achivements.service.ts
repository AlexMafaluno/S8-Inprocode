import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AchivementsService {

  getAchivements(){
    return this.achivements;
  }
  achivements: {
    id: number;
    description: string;
    type: 'logro';
    hidden?: boolean;
    revealedDescription?: string;
  }[] = [
    { id: 1, description: 'jugar 10 scape rooms', type: 'logro' },
    { id: 2, description: 'jugar 30 scape rooms', type: 'logro' },
    { id: 3, description: 'jugar 50 scape rooms', type: 'logro' },
    { id: 4, description: 'jugar tu primer escape room', type: 'logro' },
    { id: 5, description: 'jugar en 3 temáticas distintas', type: 'logro' },
    { id: 6, description: 'jugar una room de terror', type: 'logro' },
    {
      id: 7,
      description: 'jugar una room cada día por una semana',
      type: 'logro',
    },
    { id: 8, description: 'jugar 3 rooms en un solo día', type: 'logro' },
    {
      id: 21,
      description: '???', // Se revela cuando se desbloquea
      type: 'logro',
      hidden: true,
      revealedDescription: 'Encontraste un easter egg en una escape room',
    },
    {
      id: 22,
      description: '???',
      type: 'logro',
      hidden: true,
      revealedDescription:
        'Intentaste abrir una puerta con el código 1234 (malísimo intento)',
    },
    {
      id: 23,
      description: '???',
      type: 'logro',
      hidden: true,
      revealedDescription:
        'Estuviste más de 5 minutos mirando un objeto sin interactuar',
    },
    {
      id: 24,
      description: '???',
      type: 'logro',
      hidden: true,
      revealedDescription: 'Repetiste la misma acción errónea 5 veces seguidas',
    },
    {
      id: 25,
      description: '???',
      type: 'logro',
      hidden: true,
      revealedDescription:
        'Completaste una escape room exactamente en 00:00:00 (perfect timing!)',
    },
  ];
  constructor() {}
}
