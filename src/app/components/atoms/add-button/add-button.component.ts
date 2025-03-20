import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-button',
  imports: [RouterModule],
  template: `<button type="button" [routerLink]="['/crud/add']"  class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Add ScapeRoom
</button>`,
  //styleUrl: './add-button.component.scss'
})
export class AddButtonComponent {
  @Input() text: string = 'Add ScapeRoom';
  @Output() openModal = new EventEmitter<void>();

 open() {
  console.log('🟢 Emitiendo evento para abrir modal');
    this.openModal.emit();
  } 
}
