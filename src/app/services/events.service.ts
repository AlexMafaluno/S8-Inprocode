import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { EventItem } from '../interfaces/event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
private myAppUrl: string;
private myApiUrl: string;
  constructor(private http: HttpClient) {
    this.myAppUrl= environment.endpoint;
    this.myApiUrl= 'event/';
  }

  getEvents(): Observable<EventItem>{
  return this.http.get<{ code: string; message: string; data: EventItem }>(this.myAppUrl + this.myApiUrl).
  pipe(
    map(response => response.data)
  )
  }
  

  addEvent(event_name:string, description:string, date:string, time_start:string, people:number): Observable<any>{
    const url = `${this.myAppUrl}${this.myApiUrl}save-Event`;
  console.log('🌐 URL de la petición:', url);
   return this.http.post(url,{event_name, description, date, time_start, people});
   }

   deleteEvent(id:number): Observable<any>{
    return this.http.delete((this.myAppUrl + this.myApiUrl + id))
   }
}
