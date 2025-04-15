import { Component, EventEmitter, inject, Input, OnInit, Output, signal } from '@angular/core';
import { ScapeRoom, ScapeRoomItem } from '../../interfaces/scaperoom';
import { ScaperoomService } from '../../services/scaperoom.service';
import { ImageComponent } from "../atoms/image/image.component";
import { UploadImageService } from '../../services/upload-image.service';
import { ExitButtonComponent } from "../atoms/exit-button/exit-button.component";
import { PhotoService } from '../../services/photo.service';
import { CounterService } from '../../services/counter.service';
import { Photo } from '../../interfaces/photo';
import { NotificationService } from '../../services/notification.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { catchError, EMPTY, throwError } from 'rxjs';
@Component({
  selector: 'app-scape-room-card',
  imports: [ExitButtonComponent, RouterModule],
  templateUrl: './scape-room-card.component.html',
  styleUrl: './scape-room-card.component.scss'
})
export class ScapeRoomCardComponent{
  selectedFile!: File;
  errorMessage: string ='';
  @Input() card!: ScapeRoom;
  @Input() scapeRoom:ScapeRoomItem[] = [];
  userPhotos = signal<Photo[]>([]);
  

  private uploadImageService = inject(UploadImageService);
  private photoService = inject(PhotoService);
  private counterService = inject(CounterService);
  private toastService = inject(NotificationService);
  private router = inject(Router);
  private aRouter = inject(ActivatedRoute);

  onUpload(arg0: number) {
    if (!this.selectedFile) {
      console.error('No se ha seleccionado un archivo.');
      return;
    }
    console.log(this.card);
    this.photoService.uploadImage(this.selectedFile, arg0).pipe(
      catchError((errorMessage) => {
        this.errorMessage = errorMessage;
        return EMPTY;
      })
    ).subscribe({
      next: (response) => {
        console.log('Imagen subida con éxito', response);
        this.increaseCounter();
        this.toastService.success('Imagen subida con éxito', 'Éxito'); 
        this.router.navigate(['/scaperooms']);    
      },
      error: (error) => {
        console.error('Error al subir la imagen', error);
      },
    });
}

    onFileSelected($event: Event) {
      this.selectedFile = ($event.target as HTMLInputElement).files![0];
      console.log(this.selectedFile);
      this.errorMessage= '';
    }


    increaseCounter() {
      
      const userId = 359; // dinámico si quieres
    this.photoService.getPhotosByUser(userId).subscribe((photos) => {
      this.userPhotos.set(photos);
      console.log('Fotos del usuario:', photos);
      this.counterService.setCount(photos.length);
    });
    this.counterService.increment(1);
    console.log('Nuevo valor:', this.counterService.count());
      
  }
}

