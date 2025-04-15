import { Component,Input, OnInit } from '@angular/core';
import { ScapeRoom } from '../../interfaces/scaperoom';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardComponent } from "../card/card.component";
import { Photo } from '../../interfaces/photo';
import { AchivementCardComponent } from "../achivement-card/achivement-card.component";

@Component({
  selector: 'app-list-scaperooms',
  imports: [CommonModule, RouterModule, CardComponent, AchivementCardComponent],
  templateUrl: './list-scaperooms.component.html',
  styleUrl: './list-scaperooms.component.scss',
})
export class ListScaperoomsComponent{

  @Input() listScapeRooms: ScapeRoom[] = [];
  @Input() userPhotos: Photo[] = [];

 // errorMessage : string = 'No hay scape rooms';
}
