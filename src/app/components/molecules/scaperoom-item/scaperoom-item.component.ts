import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ScapeRoom, ScapeRoomItem } from '../../../interfaces/scaperoom';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scaperoom-item',
  imports: [RouterModule,CommonModule],
  templateUrl: './scaperoom-item.component.html',
  styleUrl: './scaperoom-item.component.scss'
})
export class ScaperoomItemComponent {
  @Input() card!: ScapeRoom;
  // @Output() onDelete = new EventEmitter<number>();

  // handleDelete() {
  //   this.onDelete.emit(this.card.id);
  // }
}

//! (Non-null assertion) → Le dice a TypeScript que item 
// siempre tendrá un valor, evitando errores de inicialización.
