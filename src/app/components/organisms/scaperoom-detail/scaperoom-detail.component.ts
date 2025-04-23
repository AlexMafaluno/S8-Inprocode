import { Component, EventEmitter, inject, Input, OnInit, Output, signal } from '@angular/core';

// import { ScaperoomService } from '../../services/scaperoom.service';
// import { ImageComponent } from "../atoms/image/image.component";

import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { catchError, EMPTY, throwError } from 'rxjs';

import { ExitButtonComponent } from '../../atoms/exit-button/exit-button.component';
import { LevelService } from '../../../services/business/level.service';
import { NotificationService } from '../../../services/notification.service';
import { Photo } from '../../../interfaces/photo';
import { CounterService } from '../../../services/business/counter.service';
import { PhotoService } from '../../../services/integration/photo.service';
import { UploadImageService } from '../../../services/integration/upload-image.service';
import { ScapeRoom, ScapeRoomItem } from '../../../interfaces/scaperoom';
import { FileInputComponent } from "../../atoms/file-input/file-input.component";
import { FileUploadComponent } from "../../molecules/file-upload/file-upload.component";
@Component({
  selector: 'app-scaperoom-detail',
  imports: [ExitButtonComponent, RouterModule, FileUploadComponent],
  templateUrl: './scaperoom-detail.component.html',
  styleUrl: './scaperoom-detail.component.scss'
})
export class ScaperoomDetailComponent implements OnInit{
  selectedFile!: File;
  errorMessage: string ='';
  @Input() card!: ScapeRoom;
  @Input() scapeRoom:ScapeRoomItem[] = [];
  userPhotos = signal<Photo[]>([]);
  
  private counterService = inject(CounterService);
 

ngOnInit(): void {
  // this.increaseCounter();
}

increaseCounter() {
  
    this.counterService.increment(1);
    console.log('Nuevo valor:', this.counterService.count());
  }
}


