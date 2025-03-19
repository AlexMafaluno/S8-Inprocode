import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  imports: [CommonModule],
  templateUrl: './delete-button.component.html',
  styleUrl: './delete-button.component.scss'
})
export class DeleteButtonComponent {
  @Input() id!: number;
@Input() label: string = 'Delete';
@Output() delete = new EventEmitter<number>();

handleClick() {
  this.delete.emit(this.id);
}
}
