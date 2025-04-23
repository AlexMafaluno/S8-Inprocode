import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ScapeRoom, ScapeRoomItem } from '../../../interfaces/scaperoom';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PadZeroPipe } from "../../../shared/pipes/pad-zero.pipe";

@Component({
  selector: 'app-scaperoom-item',
  imports: [RouterModule, CommonModule, PadZeroPipe],
  templateUrl: './scaperoom-item.component.html',
  styleUrl: './scaperoom-item.component.scss'
})
export class ScaperoomItemComponent {
  @Input() card!: ScapeRoom;
}

