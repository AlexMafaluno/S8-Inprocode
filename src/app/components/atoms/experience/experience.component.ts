import { Component, Input, Signal } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
@Input() experience!: Signal<number>;

get exp(): number {
  return this.experience();
}
}
