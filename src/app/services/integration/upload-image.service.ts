import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../../config/url';
@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  constructor(private http: HttpClient) {}

uploadImage(file: File, scaperoomId:number ): Observable<any>{
  const formData = new FormData();
  formData.append('file', file);
  formData.append('id', scaperoomId.toString());

  return this.http.post<any>(API_ENDPOINTS.PHOTO.UPLOAD,formData);}

}
