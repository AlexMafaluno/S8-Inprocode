import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ScapeRoom, ScapeRoomItem } from '../interfaces/scaperoom';

@Injectable({
  providedIn: 'root'
})
export class ScaperoomService {
private myAppUrl: string;
private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl= environment.endpoint;
    this.myApiUrl= 'api/scaperoom/';
   }

   getListScapeRooms(): Observable<ScapeRoom[]> {
   return this.http.get<{ data: ScapeRoom []}>(this.myAppUrl + this.myApiUrl).
   pipe(
     map(response => response.data)
   )
  }

  deleteScapeRoom(id: number):Observable<void> {
    return this.http.delete<void>(this.myAppUrl + this.myApiUrl + id);
  }

  saveScapeRoom(scapeRoom :ScapeRoom): Observable<void>{
   return this.http.post<void>(this.myAppUrl + this.myApiUrl, scapeRoom )
  }

  getScapeRoom(id: Number): Observable<ScapeRoom>{
    return this.http.get<{ data: ScapeRoom }>(this.myAppUrl + this.myApiUrl + id).
    pipe(
      map(response => response.data)
    )
  }

  updateScapeRoom(id:number, scapeRoom: ScapeRoom): Observable<void>{
    return this.http.patch<void>((this.myAppUrl + this.myApiUrl + id),scapeRoom);
  }

}