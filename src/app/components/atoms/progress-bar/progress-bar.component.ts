import { Component, inject } from '@angular/core';
import { LevelService } from '../../../services/level.service';

@Component({
  selector: 'app-progress-bar',
  imports: [],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent {
exp = inject(LevelService).exp;
}
