import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-edit-button',
  imports: [],
  template: `<button class="btn btn-primary btn-sm">{{text}}</button>`,
  styleUrl: './edit-button.component.scss'
})
export class EditButtonComponent {
@Input() text: string = 'Edit ScapeRoom';
}
