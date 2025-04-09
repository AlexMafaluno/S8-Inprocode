import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ScapeRoom, ScapeRoomItem } from '../interfaces/scaperoom';
import { url } from '../config/url';

@Injectable({
  providedIn: 'root'
})
export class ScaperoomService {
  constructor(private http: HttpClient) {
   
   }
   getListScapeRooms(): Observable<ScapeRoom[]> {
   return this.http.get<{ data: ScapeRoom []}>(url.API_URL + url.API_PATH).
   pipe(
     map(response => response.data)
   )
  }
  deleteScapeRoom(id: number):Observable<void> {
    return this.http.delete<void>(url.API_URL + url.API_PATH + id);
  }

  saveScapeRoom(scapeRoom :ScapeRoom): Observable<void>{
   return this.http.post<void>(url.API_URL + url.API_PATH, scapeRoom )
  }

  getScapeRoom(id: Number): Observable<ScapeRoom>{
    return this.http.get<{ data: ScapeRoom }>(url.API_URL + url.API_PATH + id).
    pipe(
      map(response => response.data)
    )
  }
  updateScapeRoom(id:number, scapeRoom: ScapeRoom): Observable<void>{
    return this.http.patch<void>((url.API_URL + url.API_PATH + id),scapeRoom);
  }

}