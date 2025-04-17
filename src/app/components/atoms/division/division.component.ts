import { Component, Input, Signal } from '@angular/core';
import { Division } from '../../../interfaces/division';

@Component({
  selector: 'app-division',
  imports: [],
  templateUrl: './division.component.html',
  styleUrl: './division.component.scss'
})
export class DivisionComponent {
@Input() division!: Division;

}
