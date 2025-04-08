import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ScapeRoom, ScapeRoomItem } from '../../interfaces/scaperoom';
import { RouterModule } from '@angular/router';
import { DeleteButtonComponent } from "../atoms/delete-button/delete-button.component";
import { EditButtonComponent } from "../atoms/edit-button/edit-button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [RouterModule, DeleteButtonComponent,CommonModule, EditButtonComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() card!: ScapeRoom;
  @Output() onDelete = new EventEmitter<number>();

  handleDelete() {
    this.onDelete.emit(this.card.id);
  }
}

//! (Non-null assertion) → Le dice a TypeScript que item 
// siempre tendrá un valor, evitando errores de inicialización.
