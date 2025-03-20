import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-modal',
  imports: [CommonModule, RouterModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() isVisible: boolean = false;
  @Output() closeModal = new EventEmitter<void>();
  
  close() {
    //this.isVisible = false;
    this.closeModal.emit();
  }
}
