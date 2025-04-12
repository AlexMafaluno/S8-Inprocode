import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ScapeRoom, ScapeRoomItem} from '../interfaces/scaperoom';
import {API_ENDPOINTS } from '../config/url';

@Injectable({
  providedIn: 'root'
})
export class ScaperoomService {
  constructor(private http: HttpClient) {}

  getAllScapeRooms(): Observable<ScapeRoom[]> {
    return this.http.get<{ data: ScapeRoom []}>(API_ENDPOINTS.SCAPEROOM.BASE).
    pipe(
      map(response => response.data)
    )
   }

   getListScapeRooms(page: number, genre: string = ''): Observable<ScapeRoomItem> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('genre', genre);
   return this.http.get<{ data: ScapeRoom[]; pagination: any}>(API_ENDPOINTS.SCAPEROOM.BASE, { params }).
   pipe(
     map(response => ({
      data: response.data,
      pagination: response.pagination,
      map: (callback: (scapeRoom: ScapeRoom) => any) => response.data.map(callback) // Ensure 'map' is included
    }))
  );
  }

    getScapeRoom(id: number): Observable<ScapeRoom>{
    return this.http.get<{ data: ScapeRoom }>(API_ENDPOINTS.getScaperoomById(id)).
    pipe(
      map(response => response.data)
    )
  }

  deleteScapeRoom(id: number):Observable<void> {
    return this.http.delete<void>(API_ENDPOINTS.deleteScaperoomById(id), {
      withCredentials: true 
    });
  }

  saveScapeRoom(scapeRoom :ScapeRoom): Observable<void>{
   return this.http.post<void>(API_ENDPOINTS.SCAPEROOM.BASE, scapeRoom, {
    withCredentials: true 
  })
  }

 
  updateScapeRoom(id:number, scapeRoom: ScapeRoom): Observable<void>{
    return this.http.patch<void>(API_ENDPOINTS.updateScaperoomById(id),scapeRoom, {
      withCredentials: true 
    });
  }

}