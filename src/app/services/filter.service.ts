import { Injectable } from '@angular/core';
import { ScapeRoom } from '../interfaces/scaperoom';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  sortedBy(criteria: string, data: any[]) {
   
    switch (criteria) {
      case 'name':
        return data.sort((a, b) => a.title.localeCompare(b.title));
      case 'tipo':
        return data.sort((a, b) => a.price - b.price);
      case 'fecha':
        return data.sort((a, b) => a.capacity - b.capacity);
      default:
        return data;
    }
  }
}
