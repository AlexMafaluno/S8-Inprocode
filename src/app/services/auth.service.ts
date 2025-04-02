import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Auth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider, signOut} from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth);
  private readonly isLoggedIn = new BehaviorSubject<boolean>(false);
  //private userSubject = new BehaviorSubject<User | null>(null);
  
  isAuthenticated$(): Observable<boolean> {
  return this.isLoggedIn.asObservable();  
  }

  constructor() {
    onAuthStateChanged(this.auth, (user: any) => {
      console.log('AuthService - Usuario detectado:', user); // 👀 Ver si detecta el usuario
      this.isLoggedIn.next(!!user);
    });
  }
  
  async login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  async register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  async logout() {
    return signOut(this.auth);
  }
  async loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

}
