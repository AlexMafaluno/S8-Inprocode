import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const authService = inject(AuthService);
  

  // Verifica si el usuario está autenticado y tiene el rol de 'admin'
  const isAdmin = authService.isUserAdmin(); // Necesitas tener esta lógica en tu servicio AuthService

  if (isAdmin) {
    return true; // Permite el acceso
  } else {
    // Redirige a una página de acceso denegado o login si el usuario no es admin
    router.navigate(['/profile']);
    return false;
  }
};
