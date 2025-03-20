import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-button',
  imports: [],
  template: `<button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" (click)="open()">{{text}}</button>`,
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
