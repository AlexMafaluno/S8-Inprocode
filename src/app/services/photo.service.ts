import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
private myAppUrl: string;
private myApiUrl: string;
private myApiUrl2: string;
private myApiUrl3: string;
  constructor(private http:HttpClient) {

    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'photo/';
    this.myApiUrl2 = 'photos/user/';
    this.myApiUrl3 = 'upload-photo';
   }

   getPhotosByUser(id: Number): Observable<any> {
    return this.http.get<any>(this.myAppUrl + this.myApiUrl + this.myApiUrl2 + id) ;
}


uploadImage(file: File, scaperoomId:number): Observable<any>{
  const formData = new FormData();
  formData.append('file', file);
  formData.append('id', scaperoomId.toString());
  
  return this.http.post<any>((this.myAppUrl + this.myApiUrl + this.myApiUrl3),formData);  
}

}

