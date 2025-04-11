import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit-button',
  imports: [RouterModule],
  template: `<button type="button" class="btn btn-info btn-sm"> {{text}}
</button>`,
  styleUrl: './edit-button.component.scss'
})
export class EditButtonComponent {
  @Input() id!: number;
text: string = 'Edit';
}
