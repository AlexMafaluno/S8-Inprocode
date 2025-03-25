import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Scaperoom, ScapeRoomItem } from '../interfaces/scaperoom';

@Injectable({
  providedIn: 'root'
})
export class ScaperoomService {
private myAppUrl: string;
private myApiUrl: string;
//private listScapeRooms: Scaperoom = [];

  constructor(private http: HttpClient) {
    this.myAppUrl= environment.endpoint;
    this.myApiUrl= 'api/scaperoom/';
   }

   getListScapeRooms(): Observable<Scaperoom> {
   return this.http.get<Scaperoom>(this.myAppUrl + this.myApiUrl);
  }

  deleteScapeRoom(id: number):Observable<void> {
    return this.http.delete<void>(this.myAppUrl + this.myApiUrl + id);
  }

  saveScapeRoom(scapeRoom :ScapeRoomItem): Observable<void>{
   return this.http.post<void>(this.myAppUrl + this.myApiUrl, scapeRoom )
  }

  getScapeRoom(id: Number): Observable<ScapeRoomItem>{
    return this.http.get<ScapeRoomItem>(this.myAppUrl + this.myApiUrl + id);
  }
/*async getListScapeRooms(): Promise<Scaperoom[]> {
  try {
    const response = await fetch((this.myAppUrl + this.myApiUrl), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      console.warn("Error en la respuesta de l'API");
      return this.listScapeRooms;
    }

    const data = await response.json();

    if (!data.data || data.data.length === 0) {
      console.warn('No se encontraron más naves.');
      return this.listScapeRooms;
    }

    return this.listScapeRooms;
  } catch (error) {
    console.error('Ha habido un error:', error);
    throw error;
  }
}
*/
}