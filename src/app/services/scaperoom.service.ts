import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { ScapeRoom, ScapeRoomItem } from '../interfaces/scaperoom';
import { API_ENDPOINTS } from '../config/url';
import { LoggingService } from './logging.service';
import { ApiConfigService } from './integration/api-config.service';
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
          console.log('Error desde el servicio Scaperoom', err)
          const errorObj = createAppError(err);
          this.loggingService.logError(errorObj);
          return throwError(()=> err); // Re-throw the error to propagate it
        })
      );
  }

  getScapeRoom(id: number): Observable<ScapeRoom> {
    return this.apiConfigService
      .get<{ data: ScapeRoom }>(API_ENDPOINTS.getScaperoomById(id))
      .pipe(map((response) => response.data),
      catchError((err) => {
        console.log('Error al cargar scaperoom con id', err)
          const errorObj = createAppError(err);
          this.loggingService.logError(errorObj);
        throw throwError(() => err); // Re-throw the error to propagate it
      }));
  }

  getScapeRoomByGenre(genre: string): Observable<ScapeRoom[]>{
    return this.apiConfigService.get<{ data: ScapeRoom[] }>(`${API_ENDPOINTS.SCAPEROOM.BY_GENRE}${genre}`).
    pipe(map((response) => response.data))
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
