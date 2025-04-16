import { Injectable } from '@angular/core';
import { User } from 'firebase/auth';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private userSubject = new BehaviorSubject<User | null>(null);

setUser(user: User): void {
  this.userSubject.next(user);
}

getUser(): Observable<User | null>{
  return this.userSubject.asObservable();
}
getCurrentUser(): User | null{
  return this.userSubject.value;
}
clearUser():void{
  this.userSubject.next(null);
}
}
