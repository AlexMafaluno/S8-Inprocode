import { Component,inject,Input, OnInit } from '@angular/core';
import { ScapeRoom } from '../../interfaces/scaperoom';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardComponent } from "../card/card.component";
import { Photo } from '../../interfaces/photo';
import { AchivementCardComponent } from "../achivement-card/achivement-card.component";
import { ModalFilterComponent } from "../modal-filter/modal-filter.component";
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-list-scaperooms',
  imports: [CommonModule, RouterModule, CardComponent, AchivementCardComponent, ModalFilterComponent],
  templateUrl: './list-scaperooms.component.html',
  styleUrl: './list-scaperooms.component.scss',
})
export class ListScaperoomsComponent{

  @Input() listScapeRooms: ScapeRoom[] = [];
  //@Input() userPhotos: Photo[] = [];


private filterService = inject(FilterService);
  loading: boolean | undefined;
  


sortBy(criteria: string) {
  console.log('Orden seleccionado:', criteria);
  this.loading = true;
  try {
    this.listScapeRooms = this.filterService.sortedBy(criteria, this.listScapeRooms);
  } catch (error) {
    console.error('Error al ordenar:', error);
  } finally {
    this.loading = false;
  }
  }

 // errorMessage : string = 'No hay scape rooms';
}
function sortBy(criteria: any, string: any) {
  throw new Error('Function not implemented.');
}

