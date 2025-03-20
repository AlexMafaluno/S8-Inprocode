import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit-button',
  imports: [RouterModule],
  template: `<button type="button" [routerLink]="['/crud/edit', id]" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> Edit
</button>`,
  styleUrl: './edit-button.component.scss'
})
export class EditButtonComponent {
  @Input() id!: number;
@Input() text: string = 'Edit ScapeRoom';
}
