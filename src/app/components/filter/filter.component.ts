import { Component } from '@angular/core';
import { AddButtonComponent } from "../atoms/add-button/add-button.component";

@Component({
  selector: 'app-filter',
  imports: [AddButtonComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

}
