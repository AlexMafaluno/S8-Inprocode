import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { EventItem } from '../interfaces/event';
import { API_ENDPOINTS } from '../config/url';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) {
    
  }

  getEvents(): Observable<EventItem>{
  return this.http.get<{ code: string; message: string; data: EventItem }>(API_ENDPOINTS.EVENT.BASE).
  pipe(
    map(response => response.data)
  )
  }
  

  addEvent(event_name:string, description:string, date:string, time_start:string, people:number): Observable<any>{
   return this.http.post(API_ENDPOINTS.EVENT.SAVE,{event_name, description, date, time_start, people});
   }

   deleteEvent(id:number): Observable<any>{
    return this.http.delete((API_ENDPOINTS.deleteEventById(id)));
   }
}
