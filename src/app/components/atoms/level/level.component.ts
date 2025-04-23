import { Component, inject } from '@angular/core';
import { LevelService } from '../../../services/business/level.service';

@Component({
  selector: 'app-level',
  imports: [],
  templateUrl: './level.component.html',
  styleUrl: './level.component.scss'
})
export class LevelComponent {
level = inject(LevelService).currentLevel; 
}
