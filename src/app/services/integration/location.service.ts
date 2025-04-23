import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINTS } from '../../config/url';
import { LocationItem } from '../../interfaces/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) {}

  getListLocations(): Observable<LocationItem[]> {
    return this.http.get<{ code: number, message: string, data: LocationItem[] }>(API_ENDPOINTS.LOCATION.BASE).
    pipe(
      map(response => response.data)
    );
   }


  addLocation(lat: number, lng: number):Observable<any>{
    return this.http.post(API_ENDPOINTS.LOCATION.SAVE, { lat, lng });
  }

 
   getLocationsByGenre(genre: string): Observable<LocationItem[]>{
    return this.http.get<{ code: number, message: string, data: LocationItem[] }>(`${API_ENDPOINTS.LOCATION.BY_GENRE}${genre}`).
    pipe(
      map(response => response.data)
    )
   }
  
  
}
