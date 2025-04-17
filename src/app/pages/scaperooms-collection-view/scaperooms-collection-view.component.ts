import { Component, inject, OnInit } from '@angular/core';
import { ListScaperoomsComponent } from '../../components/list-scaperooms/list-scaperooms.component';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../components/modal/modal.component';
import { FilterComponent } from "../../components/filter/filter.component";
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

@Component({
  selector: 'app-scaperooms-collection-view',
  imports: [ListScaperoomsComponent, CommonModule, ModalComponent, FilterComponent, InfiniteScrollDirective, ProgressSpinnerComponent, UserStatsComponent, FilterButtonComponent],
  templateUrl: './scaperooms-collection-view.component.html',
  styleUrl: './scaperooms-collection-view.component.scss'
})
export class ScaperoomsCollectionViewComponent implements OnInit {
  listScapeRooms: ScapeRoom[] = [];
  userPhotos: Photo[] = [];
  page: number = 1;
  hasMore: boolean = true;
  loading: boolean = false;
  errorMessage: string = '';
  private scaperoomFacade = inject(ScaperoomFacadeService);
  private photoService = inject(PhotoService);
  private counterService = inject(CounterService);
  
  ngOnInit(): void {
    // this.page = 1;
  this.hasMore = true;
    this.loadScapeRooms(359); // Cambia el ID según sea necesario
    this.loadUserPhotos(359);
  }

loadScapeRooms(userId: number): void {

  if(this.loading || !this.hasMore) return;

    this.loading = true;
    this.scaperoomFacade.getScapeRoomWithPotos(userId, this.page)
    // .pipe(
    //   catchError((errorMessage) => {
    //     console.log('Error desde el componente padre');
    //     this.errorMessage = errorMessage;
    //     this.loading = false;
    //     return EMPTY;
    //     // return throwError(() => errorMessage);
    //   }))
      .subscribe({
      next: (res: ScapeRoom[]) => {
        this.listScapeRooms = [...this.listScapeRooms, ...res];
        this.hasMore = res.length > 0; // Adjust logic if pagination is needed
        this.page++;
        console.log('Cargando página:', this.page);
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar los scaperooms con fotos:', err);
        this.listScapeRooms = [];
        this.errorMessage = err;
        this.loading = false;
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
}
