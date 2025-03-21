import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
private apiUrl = 'http://localhost:3000/save-location';
  constructor(private http: HttpClient) {}

  addLocation(lat: number, lng: number):Observable<any>{
    return this.http.post(this.apiUrl, { lat, lng });
  }
}
