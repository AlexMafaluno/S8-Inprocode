import { inject, Injectable, signal } from '@angular/core';
import { catchError, forkJoin, map, Observable, of, throwError } from 'rxjs';
import { ScapeRoom } from '../interfaces/scaperoom';
import { ScaperoomService } from './scaperoom.service';
import { PhotoService } from './photo.service';
import { createAppError } from '../config/response';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class ScaperoomFacadeService {
 
  private scaperoomService = inject(ScaperoomService);
  private photoService = inject(PhotoService);
  private loggingService = inject(LoggingService);


private scapeRoomsSignal = signal<ScapeRoom[]>([]);


get scapeRooms(){
  return this.scapeRoomsSignal.asReadonly();
}

setScapeRooms(newRooms: ScapeRoom[]){
  this.scapeRoomsSignal.set(newRooms);
}

addScapeRooms(moreRooms: ScapeRoom[]) {
  const current = this.scapeRoomsSignal();
  this.scapeRoomsSignal.set([...current, ...moreRooms]);
}

clearScapeRooms() {
  this.scapeRoomsSignal.set([]);
}

getScapeRoomWithPotos(userId: number, page?: number, genre?:string): Observable<ScapeRoom[]> {
    return forkJoin({
      scaperooms: this.scaperoomService.getListScapeRooms(page ?? 1, genre),
      photos: this.photoService.getPhotosByUser(userId).pipe(
        catchError(err => {
          // Manejo del caso "sin fotos" o error específico
          console.warn('Error o sin fotos, devolviendo array vacío');
          return of([]); // ← devolvemos un observable vacío para que no rompa el forkJoin
        }))
    }).pipe(
      map(({ scaperooms, photos }) =>
        scaperooms.map(scaperoom => {
          const photo = photos.find(p => p.scaperoom_id === Number(scaperoom.id));
          return {
            ...scaperoom,
            imageUrl: photo?.photoURL || null
          }as ScapeRoom;
        })
      ), 
      catchError((err) => {
                console.log('Error desde el servicio Facade', err)
                const errorObj = createAppError(err);
                this.loggingService.logError(errorObj);
                return throwError(()=> new Error(err?.message || 'Error al cargar scaperooms'));
              })
    )
  }
}
