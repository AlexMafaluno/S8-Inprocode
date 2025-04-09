import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map, Observable } from 'rxjs';
import { Photo, PhotoItem } from '../interfaces/photo';
import { API_ENDPOINTS, API_ROOT} from '../config/url';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor(private http:HttpClient) {}

   getPhotosByUser(id: number): Observable<Photo[]> {
    return this.http.get<{ data: Photo[]}>(API_ENDPOINTS.getPhotosByUser(id)).
    pipe(
      map(response => response.data));
}

uploadImage(file: File, scaperoomId:number): Observable<any>{
  const formData = new FormData();
  formData.append('file', file);
  formData.append('id', scaperoomId.toString());
  
  return this.http.post<any>(API_ENDPOINTS.PHOTO.UPLOAD,formData,{
    withCredentials: true 
  });}
}
