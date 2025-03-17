import { Component, inject, Input } from '@angular/core';
import { ScapeRoomItem } from '../../interfaces/scaperoom';
import { ScaperoomService } from '../../services/scaperoom.service';

@Component({
  selector: 'app-scape-room-card',
  imports: [],
  templateUrl: './scape-room-card.component.html',
  styleUrl: './scape-room-card.component.scss'
})
export class ScapeRoomCardComponent {
  @Input() scapeRoom:ScapeRoomItem[] = [];

}
