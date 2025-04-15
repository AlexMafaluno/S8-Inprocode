import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { ScapeRoom, ScapeRoomItem } from '../interfaces/scaperoom';
import { API_ENDPOINTS } from '../config/url';
import { LoggingService } from './logging.service';
import { ApiConfigService } from './api-config.service';
import { createAppError } from '../config/response';
@Injectable({
  providedIn: 'root',
})
export class ScaperoomService {
  private apiConfigService= inject(ApiConfigService);
private loggingService = inject(LoggingService);
  constructor(private http: HttpClient) {}

  getAllScapeRooms(): Observable<ScapeRoom[]> {
    return this.apiConfigService
      .get<{ data: ScapeRoom[] }>(API_ENDPOINTS.SCAPEROOM.BASE)
      .pipe(map((response) => response.data));
  }

  getListScapeRooms(
    page: number,
    genre: string = ''
  ): Observable<ScapeRoomItem> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('genre', genre);
    return this.apiConfigService
      .get<{ data: ScapeRoom[]; pagination: any }>(
        API_ENDPOINTS.SCAPEROOM.BASE,
        { params }
      )
      .pipe(
        map((response) => ({
          data: response.data,
          pagination: response.pagination,
          map: (callback: (scapeRoom: ScapeRoom) => any) =>
            response.data.map(callback), // Ensure 'map' is included
        })),
        catchError((err) => {
          console.log(err.error.message);
          console.log('Error desde el servicio')
          const errorObj = createAppError(err);
          this.loggingService.logError(errorObj);
          console.error('Error fetching scape rooms:', err);
          return throwError(()=> err); // Re-throw the error to propagate it
        })
      );
  }

  getScapeRoom(id: number): Observable<ScapeRoom> {
    return this.apiConfigService
      .get<{ data: ScapeRoom }>(API_ENDPOINTS.getScaperoomById(id))
      .pipe(map((response) => response.data),
      catchError((err) => {
        // Write the logic to log errors
        console.error('Error fetching scape room:', err);
        throw err; // Re-throw the error to propagate it
      }));
  }

  deleteScapeRoom(id: number): Observable<void> {
    return this.http.delete<void>(API_ENDPOINTS.deleteScaperoomById(id), {
      withCredentials: true,
    });
  }

  saveScapeRoom(scapeRoom: ScapeRoom): Observable<void> {
    return this.http.post<void>(API_ENDPOINTS.SCAPEROOM.BASE, scapeRoom, {
      withCredentials: true,
    });
  }

  updateScapeRoom(id: number, scapeRoom: ScapeRoom): Observable<void> {
    return this.http.patch<void>(
      API_ENDPOINTS.updateScaperoomById(id),
      scapeRoom,
      {
        withCredentials: true,
      }
    );
  }
}
