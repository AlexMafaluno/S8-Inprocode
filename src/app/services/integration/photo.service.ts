import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { catchError, delay, map, Observable, of, retry, throwError } from 'rxjs';
import { Photo, PhotoItem } from '../../interfaces/photo';
import { API_ENDPOINTS, API_ROOT} from '../../config/url';
import { LoggingService } from '../logging.service';
import { createAppError } from '../../config/response';
import { ApiConfigService } from './api-config.service';
@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private apiConfigService =inject(ApiConfigService);
  private loggingService =inject(LoggingService);

  constructor(private http:HttpClient) {}

   getPhotosByUser(id: number): Observable<Photo[]> {
    return this.http.get<{ data: Photo[]}>(API_ENDPOINTS.getPhotosByUser(id)).
    pipe(
      map(response => response.data),
    catchError((err) => {
              const errorObj = createAppError(err);
              this.loggingService.logError(errorObj);
              console.error('Error fetching photos:', err);
              return throwError(() => new Error(err?.error?.message || 'Error al obtener fotos')); //Se pasaa como Error
            }));
}

uploadImage(file: File, scaperoomId:number): Observable<any>{
  const formData = new FormData();
  formData.append('file', file);
  formData.append('id', scaperoomId.toString());
  
  return this.apiConfigService.post<any>(API_ENDPOINTS.PHOTO.UPLOAD,formData,{
    withCredentials: true 
  }).pipe(
    retry({
      count: 3,
      delay: 1000
    }),
    catchError((err) => {
    const errorObj = createAppError(err);
    this.loggingService.logError(errorObj);
    return throwError(() => err.error.message); // Re-throw the error to propagate it
  }));}
}
