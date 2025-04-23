import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { NotificationService } from '../../../services/notification.service';
import { PhotoService } from '../../../services/integration/photo.service';
import { LevelService } from '../../../services/business/level.service';
import { Router } from '@angular/router';
import { catchError, EMPTY } from 'rxjs';
import { FileInputComponent } from "../../atoms/file-input/file-input.component";

@Component({
  selector: 'app-file-upload',
  imports: [FileInputComponent],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {
  @Input() cardId!: number;
  @Output() uploadSuccess = new EventEmitter<void>();

  selectedFile: File | null = null;
  errorMessage = '';


  private photoService = inject(PhotoService);
    private levelService = inject(LevelService);
    private notificationService = inject(NotificationService);
    private router = inject(Router);

    onFileSelected(file: File) {
      this.selectedFile = file;
      this.errorMessage = '';
    }

    onUpload(): void {
        if (!this.selectedFile) {
          this.notificationService.error('No se ha seleccionado un archivo.');
          return;
        }
  
        this.photoService.uploadImage(this.selectedFile, this.cardId).pipe(
          catchError((err) => {
            this.notificationService.error('Error al subir la imagen', err);
            return EMPTY;
          })
        ).subscribe({
          next: () => {
            // this.increaseCounter();
            this.levelService.gainExperience(25);
            this.notificationService.success('Imagen subida con éxito, +25 puntos de exp', 'Éxito'); 
            this.uploadSuccess.emit(); // 👈 Notifica al componente padre

            this.router.navigate(['/scaperooms']);    
          },
          error: (error) => {
            this.notificationService.error('Error al subir la imagen', error);
          },
        });
    }
}
