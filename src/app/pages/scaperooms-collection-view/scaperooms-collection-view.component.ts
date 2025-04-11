import { Component, inject, OnInit } from '@angular/core';
import { ListScaperoomsComponent } from '../../components/list-scaperooms/list-scaperooms.component';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../components/modal/modal.component';
import { FilterComponent } from "../../components/filter/filter.component";
import { ScapeRoom } from '../../interfaces/scaperoom';
import { Photo } from '../../interfaces/photo';
import { ScaperoomFacadeService } from '../../services/scaperoom-facade.service';
import { ProgressSpinnerComponent } from "../../components/progress-spinner/progress-spinner.component";

@Component({
  selector: 'app-scaperooms-collection-view',
  imports: [ListScaperoomsComponent, CommonModule, ModalComponent, FilterComponent, ProgressSpinnerComponent],
  templateUrl: './scaperooms-collection-view.component.html',
  styleUrl: './scaperooms-collection-view.component.scss'
})
export class ScaperoomsCollectionViewComponent implements OnInit {
  listScapeRooms: ScapeRoom[] = [];
  userPhotos: Photo[] = [];
  loading: boolean = false;
  
  private scaperoomFacade = inject(ScaperoomFacadeService);
  
  

loadScapeRooms(userId: number): void {
    this.loading = true;
    this.scaperoomFacade.getScapeRoomWithPotos(userId).subscribe({
      next: (scapeRooms) => {
        this.listScapeRooms = scapeRooms;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar los scaperooms con fotos:', err);
        this.listScapeRooms = [];
        this.loading = false;
      }
    });
  }
  ngOnInit(): void {
    this.loadScapeRooms(359); // Cambia el ID según sea necesario
  }
}
