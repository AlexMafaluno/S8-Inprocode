import { Component, inject } from '@angular/core';
import { ExperienceComponent } from "../../atoms/experience/experience.component";
import { CounterComponent } from "../../counter/counter.component";
import { CounterService } from '../../../services/counter.service';
import { LevelService } from '../../../services/level.service';
import { DivisionComponent } from "../../atoms/division/division.component";

@Component({
  selector: 'app-user-stats',
  imports: [ExperienceComponent, CounterComponent, DivisionComponent],
  templateUrl: './user-stats.component.html',
  styleUrl: './user-stats.component.scss'
})
export class UserStatsComponent {
counter = inject(CounterService).count;
experience = inject(LevelService).exp; 
division = inject(CounterService).division;
}
