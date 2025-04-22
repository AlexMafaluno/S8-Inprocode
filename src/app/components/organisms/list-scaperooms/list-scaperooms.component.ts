import { Component,inject,Input, OnInit } from '@angular/core';
import { ScapeRoom } from '../../../interfaces/scaperoom';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScaperoomItemComponent } from "../../molecules/scaperoom-item/scaperoom-item.component";
import { Photo } from '../../../interfaces/photo';
import { AchivementCardComponent } from "../../achivement-card/achivement-card.component";
import { ModalFilterComponent } from "../../modal-filter/modal-filter.component";
import { FilterService } from '../../../services/filter.service';

@Component({
  selector: 'app-list-scaperooms',
  imports: [CommonModule, RouterModule, ScaperoomItemComponent, AchivementCardComponent],
  templateUrl: './list-scaperooms.component.html',
  styleUrl: './list-scaperooms.component.scss',
})
export class ListScaperoomsComponent{

  @Input() listScapeRooms: ScapeRoom[] = [];
  //@Input() userPhotos: Photo[] = [];


}

