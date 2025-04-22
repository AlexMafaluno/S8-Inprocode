import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Auth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider, signOut} from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth);
  private currentUserUid: string | null = null;
  private readonly isLoggedIn = new BehaviorSubject<boolean>(false);
  //private userSubject = new BehaviorSubject<User | null>(null);
  
  isAuthenticated$(): Observable<boolean> {
  return this.isLoggedIn.asObservable();  
  }

  constructor() {
    onAuthStateChanged(this.auth, (user: any) => {
      console.log('AuthService - Usuario detectado:', user); // 👀 Ver si detecta el usuario
      this.isLoggedIn.next(!!user);

    // Si hay un usuario, obtenemos el token y lo guardamos en cookies
    if (user) {
      this.currentUserUid = user.uid;
      this.setAuthToken(user);
    }

    });
  }
  

// Getter para usar en componentes
getUid(): string | null {
  return this.currentUserUid;
}


// Este método es un ejemplo, ajusta según tu implementación de autenticación
isUserAdmin(): boolean {
  // Lógica para verificar si el usuario es admin
  // Por ejemplo, mirando el rol del usuario almacenado en el localStorage o en el token
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  return user?.role === 'admin'; // Asegúrate de que el objeto de usuario tenga el campo 'role'
}


  async login(email: string, password: string) {
    const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
    const user = userCredential.user;
     // Al iniciar sesión, obtenemos el token y lo guardamos en las cookies
     await this.setAuthToken(user);
    
     return userCredential;
  }

  async register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  async logout() {
    await signOut(this.auth);
    // Eliminar el token de las cookies al cerrar sesión
    this.clearAuthToken();

  }
  async loginWithGoogle() {
    const userCredential = await signInWithPopup(this.auth, new GoogleAuthProvider());
    const user = userCredential.user;

    // Al iniciar sesión con Google, obtenemos el token y lo guardamos en las cookies
    await this.setAuthToken(user);
    
    return userCredential;
  }

// Método para guardar el token en las cookies
private async setAuthToken(user: any) {
  const token = await user.getIdToken();
  document.cookie = `token=${token}; path=/; SameSite=Lax`;
  console.log("Token guardado en cookies ✅");
  console.log("Token:", token); // 👀 Ver el token guardado
  console.log(typeof token); // 👀 Ver el token guardado

}
  // Método para eliminar el token de las cookies
  private clearAuthToken() {
    document.cookie = `token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax`;
    console.log("Token eliminado de las cookies ❌");
  }
}

