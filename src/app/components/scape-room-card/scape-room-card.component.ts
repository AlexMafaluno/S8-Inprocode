import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ScapeRoom, ScapeRoomItem } from '../../interfaces/scaperoom';
import { ScaperoomService } from '../../services/scaperoom.service';
import { ImageComponent } from "../atoms/image/image.component";
import { UploadImageService } from '../../services/upload-image.service';
import { ExitButtonComponent } from "../atoms/exit-button/exit-button.component";
import { PhotoService } from '../../services/photo.service';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-scape-room-card',
  imports: [ExitButtonComponent],
  templateUrl: './scape-room-card.component.html',
  styleUrl: './scape-room-card.component.scss'
})
export class ScapeRoomCardComponent {
  selectedFile!: File;
  
  @Input() card!: ScapeRoom;
  @Input() scapeRoom:ScapeRoomItem[] = [];

  

  private uploadImageService = inject(UploadImageService);
  private photoService = inject(PhotoService);
  private counterService = inject(CounterService)

  onUpload(arg0: number) {
    if (!this.selectedFile) {
      console.error('No se ha seleccionado un archivo.');
      return;
    }
    this.photoService.uploadImage(this.selectedFile, arg0).subscribe({
      next: (response) => {
        console.log('Imagen subida con éxito', response);
        
      },
      error: (error) => {
        console.error('Error al subir la imagen', error);
      },
  })
}

    onFileSelected($event: Event) {
      this.selectedFile = ($event.target as HTMLInputElement).files![0];
      console.log(this.selectedFile);
    }


    increaseCounter(value: number): void {
      this.counterService.increaseCounter(value); // Aumenta el contador en 1
    }
  }

