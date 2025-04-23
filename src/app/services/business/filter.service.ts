import { Injectable } from '@angular/core';
import { ScapeRoom } from '../../interfaces/scaperoom';
import { Observable } from 'rxjs';
import { Photo } from '../../interfaces/photo';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  sortedBy(criteria: string, data: ScapeRoom[]) {
   
    switch (criteria) {
      case 'id':
        return data.sort((a, b) => a.id - b.id);
      // case 'fecha':
      //   return data.sort((a, b) => new Date(a.played_at).getTime() - new Date(b.played_at).getTime());
      default:
        return data;
    }
  }
}
