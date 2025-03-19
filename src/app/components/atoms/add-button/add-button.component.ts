import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-button',
  imports: [],
  template: `<button class="btn btn-primary">{{text}}</button>`,
  //styleUrl: './add-button.component.scss'
})
export class AddButtonComponent {
  @Input() text: string = 'Add ScapeRoom';
}
