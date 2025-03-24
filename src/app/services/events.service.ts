import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  getEvents(): Observable<any>{
  return this.http.get<any>(this.myAppUrl + this.myApiUrl);
  }
  

  addEvent(name:string, description:string, date:string, time:string, people:number): Observable<any>{
   return this.http.post((this.myAppUrl+ this.myApiUrl + "save-Event"),{name, description, date, time, people});
   }

   deleteEvent(id:number): Observable<any>{
    return this.http.delete((this.myAppUrl + this.myApiUrl + id))
   }
}
