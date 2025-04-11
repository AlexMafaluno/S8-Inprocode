import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-button',
  imports: [RouterModule],
  template: `<button type="button" class="btn btn-primary">
  {{text}}
</button>`,
  //styleUrl: './add-button.component.scss'
})
export class AddButtonComponent {
  @Input() text: string = 'Add ScapeRoom';
}