import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Scaperoom } from '../interfaces/scaperoom';

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

   getListScapeRooms(): Observable<Scaperoom[]>{
   return this.http.get<Scaperoom[]>(this.myAppUrl + this.myApiUrl);
}
}
