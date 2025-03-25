import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

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

  getListLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(this.myAppUrl+ this.myApiUrl);
   }
}
