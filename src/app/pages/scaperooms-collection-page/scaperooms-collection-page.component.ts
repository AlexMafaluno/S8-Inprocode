import { Component, inject, OnInit } from '@angular/core';
import { ListScaperoomsComponent } from '../../components/organisms/list-scaperooms/list-scaperooms.component';
import { CommonModule } from '@angular/common';
import { FilterPanelComponent } from "../../components/organisms/filter-panel/filter-panel.component";
import { ScapeRoom, ScapeRoomItem } from '../../interfaces/scaperoom';
import { Photo } from '../../interfaces/photo';
import { ScaperoomFacadeService } from '../../services/scaperoom-facade.service';
import { ProgressSpinnerComponent } from "../../components/atoms/progress-spinner/progress-spinner.component";
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { catchError, EMPTY, of, throwError } from 'rxjs';
import { PhotoService } from '../../services/photo.service';
import { CounterService } from '../../services/counter.service';
import { UserStatsComponent } from "../../components/organisms/user-stats/user-stats.component";
import { FilterButtonComponent } from "../../components/atoms/filter-button/filter-button.component";
import { ModalFilterComponent } from "../../components/organisms/modal-filter/modal-filter.component";
import { FilterService } from '../../services/filter.service';
import { ModalButtonComponent } from "../../components/atoms/modal-button/modal-button.component";
import { DivisionModalComponent } from "../../components/organisms/division-modal/division-modal.component";

@Component({
  selector: 'app-scaperooms-collection-page',
  imports: [ListScaperoomsComponent, CommonModule, FilterPanelComponent, InfiniteScrollDirective, ProgressSpinnerComponent, UserStatsComponent, FilterButtonComponent, ModalFilterComponent, ModalButtonComponent, DivisionModalComponent],
  templateUrl: './scaperooms-collection-page.component.html',
  styleUrl: './scaperooms-collection-page.component.scss'
})
export class ScaperoomsCollectionPageComponent implements OnInit {
  listScapeRooms: ScapeRoom[] = [];
  listScapeRoomsOriginal: ScapeRoom[] = [];  // Respaldo sin filtro
  userPhotos: Photo[] = [];
  page: number = 1;
  hasMore: boolean = true;
  loading: boolean = false;
  errorMessage: string = '';


  private scaperoomFacade = inject(ScaperoomFacadeService);
  private photoService = inject(PhotoService);
  private counterService = inject(CounterService);
  private filterService = inject(FilterService);
  

  ngOnInit(): void {
    this.scaperoomFacade.clearScapeRooms();
    // this.page = 1;
  this.hasMore = true;
    this.loadScapeRooms(359); // Cambia el ID según sea necesario
    this.loadUserPhotos(359);
  }

loadScapeRooms(userId: number): void {

  if(this.loading || !this.hasMore) return;

    this.loading = true;
    this.scaperoomFacade.getScapeRoomWithPotos(userId, this.page).pipe(
      catchError((err) => {
        this.errorMessage = err.message;
        this.loading = false; 
        return EMPTY;
      }))
      .subscribe({
      
      next: (res: ScapeRoom[]) => {
        this.scaperoomFacade.addScapeRooms(res);
        this.listScapeRooms = this.scaperoomFacade.scapeRooms();
        this.listScapeRoomsOriginal = this.scaperoomFacade.scapeRooms();
        this.hasMore = res.length > 0; // Adjust logic if pagination is needed
        this.page++;
        console.log('Cargando página:', this.listScapeRooms);
        this.loading = false;
      }
    });
  }

onGenreSelected(genre: string): void {
    if (genre === 'default') {
    this.listScapeRooms = this.listScapeRoomsOriginal;
      return;
    }
     // Resetear la página al cambiar el género
  this.page = 1;

      // Si se ha seleccionado un género, hacemos la llamada con ese filtro
      this.scaperoomFacade.getScapeRoomWithPotos(359, this.page, genre).subscribe({
        next: (response) => {
          console.log('Scaperooms filtrados por género:', response);
          this.listScapeRooms = response; // Actualizamos la lista filtrada
          this.page++;
        },
        error: (err) => {
          console.error('Error al filtrar:', err);
        }
      });
  }
  
  loadUserPhotos(userId: number): void {
    this.photoService.getPhotosByUser(userId).subscribe((photos) => {
      this.userPhotos = photos;
      this.counterService.setCount(photos.length);
      console.log('Fotos del usuario:', photos);
    });
  }

  onScroll() {
    this.loadScapeRooms(359);
    console.log('scrolled!!')
  }



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



}

