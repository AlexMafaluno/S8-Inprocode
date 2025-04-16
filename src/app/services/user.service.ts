import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiConfigService } from './api-config.service';
import { User } from 'firebase/auth';
import { API_ENDPOINTS } from '../config/url';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
private apiConfigService= inject(ApiConfigService);
  constructor() { }

  getUserFromBackend(): Observable<User>{
    return this.apiConfigService.get<{ data: User }>(API_ENDPOINTS.USER.BASE, { withCredentials: true })
    .pipe(map((response) => response.data))
  }

}
