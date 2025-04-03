import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {
  private myAppUrl: string;
  private myApiUrl: string;
  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/scaperoom/upload-photo';
   }

uploadImage(file: File, scaperoomId:number ): Observable<any>{
  const formData = new FormData();
  formData.append('image', file);
  formData.append('ScapeRoomid', scaperoomId.toString());

  return this.http.post<any>((this.myAppUrl + this.myApiUrl),formData);

  
}

}
