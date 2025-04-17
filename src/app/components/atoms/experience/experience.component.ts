import { Component, inject } from '@angular/core';
import { LevelService } from '../../../services/level.service';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
experience = inject(LevelService).exp; 
}
