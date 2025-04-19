import { inject, Injectable, signal } from '@angular/core';
import { catchError, forkJoin, map, Observable, throwError } from 'rxjs';
import { ScapeRoom } from '../interfaces/scaperoom';
import { ScaperoomService } from './scaperoom.service';
import { PhotoService } from './photo.service';
import { createAppError } from '../config/response';

@Injectable({
  providedIn: 'root'
})
export class ScaperoomFacadeService {
 
  private scaperoomService = inject(ScaperoomService);
  private photoService = inject(PhotoService);
  loggingService: any;


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

getScapeRoomWithPotos(userId: number, page?: number): Observable<ScapeRoom[]> {
    return forkJoin({
      scaperooms: this.scaperoomService.getListScapeRooms(page ?? 1),
      photos: this.photoService.getPhotosByUser(userId)
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
                return throwError(()=> err.error.message); // Re-throw the error to propagate it
              })
    )
  }
}
