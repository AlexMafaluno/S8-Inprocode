import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LocationItem } from '../interfaces/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
private myAppUrl: string;
private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'location/'
  }

  addLocation(lat: number, lng: number):Observable<any>{
    return this.http.post(`${this.myAppUrl + this.myApiUrl + `save-location`}`, { lat, lng });
  }

  getListLocations(): Observable<LocationItem[]> {
    return this.http.get<{ code: number, message: string, data: LocationItem[] }>(this.myAppUrl+ this.myApiUrl).
    pipe(
      map(response => response.data)
    );
   }

   getLocationsByGenre(genre: string): Observable<LocationItem[]>{
    return this.http.get<{ code: number, message: string, data: LocationItem[] }>(`${this.myAppUrl}location?genre=${genre}`).
    pipe(
      map(response => response.data)
    )
   }
  
  
}
