import { Component } from '@angular/core';
import { AddButtonComponent } from "../atoms/add-button/add-button.component";
import { CounterComponent } from "../counter/counter.component";
import { LevelStatusComponent } from "../atoms/level-status/level-status.component";

@Component({
  selector: 'app-filter',
  imports: [CounterComponent, LevelStatusComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

}
