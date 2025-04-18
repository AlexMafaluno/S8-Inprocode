import { inject, Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { ScapeRoom } from '../interfaces/scaperoom';
import { ScaperoomService } from './scaperoom.service';
import { PhotoService } from './photo.service';

@Injectable({
  providedIn: 'root'
})
export class ScaperoomFacadeService {
  private scaperoomService = inject(ScaperoomService);
  private photoService = inject(PhotoService);


  getScapeRoomWithPotos(userId: number): Observable<ScapeRoom[]> {
    return forkJoin({
      scaperooms: this.scaperoomService.getListScapeRooms(),
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
      )
    );
  }
}
