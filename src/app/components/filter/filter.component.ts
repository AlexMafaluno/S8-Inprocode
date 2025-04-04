import { Component } from '@angular/core';
import { AddButtonComponent } from "../atoms/add-button/add-button.component";
import { CounterComponent } from "../counter/counter.component";

@Component({
  selector: 'app-filter',
  imports: [AddButtonComponent, CounterComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

}
