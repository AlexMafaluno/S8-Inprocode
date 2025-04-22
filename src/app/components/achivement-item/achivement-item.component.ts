import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProgressBarComponent } from "../atoms/progress-bar/progress-bar.component";

@Component({
  selector: 'app-achivement-item',
  imports: [CommonModule, ProgressBarComponent],
  templateUrl: './achivement-item.component.html',
  styleUrl: './achivement-item.component.scss'
})
export class AchivementItemComponent {
@Input() card! : any;
}
