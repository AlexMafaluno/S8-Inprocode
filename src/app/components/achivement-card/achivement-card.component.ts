import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProgressBarComponent } from "../atoms/progress-bar/progress-bar.component";

@Component({
  selector: 'app-achivement-card',
  imports: [CommonModule, ProgressBarComponent],
  templateUrl: './achivement-card.component.html',
  styleUrl: './achivement-card.component.scss'
})
export class AchivementCardComponent {
@Input() card! : any;
}
