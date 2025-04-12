import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CounterService } from '../../../services/counter.service';

@Component({
  selector: 'app-level-status',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './level-status.component.html',
  styleUrl: './level-status.component.scss'
})
export class LevelStatusComponent {
public service = inject(CounterService);

formatClass(level: string): string {
  return level
    .toLowerCase()
    .replace(/ /g, '-')  // Reemplaza espacios por guiones
    .normalize("NFD")    // Elimina tildes
    .replace(/[\u0300-\u036f]/g, '');
}
}
