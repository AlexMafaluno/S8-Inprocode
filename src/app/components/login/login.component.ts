import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formLogin: FormGroup;
  private authService = inject(AuthService);
  private userService = inject(UserService);

  private router = inject(Router);
  
   constructor(private fb: FormBuilder) {
       this.formLogin = this.fb.group({
         mail: ['', [Validators.required, Validators.email]],
         password: ['', [Validators.required, Validators.minLength(6)]],
       });
     }
  
  async loginEmailPassword() {
      if (this.formLogin.invalid) {
        console.log('Formulario invalido');
        return;
      }
        const response = this.formLogin.value;
        const loginEmail: string = response.mail || '';
        const loginPassword: string = response.password || '';
  
        console.log(response); //envio al back y me devuelve la respuesta
        console.log(loginEmail);
        console.log(loginPassword);
        try {
          const userCredential = await this.authService.login(
            loginEmail,
            loginPassword
          );
          console.log(userCredential.user);
 
          // 🔥 Petición al backend para traer los datos extendidos
           this.userService.getUserFromBackend().subscribe({
            next: (userData) => {
            console.log('✅ Usuario desde la base de datos:', userData);
            this.router.navigate(['/home']);
          },
          error: (err) => {
            console.error('❌ Error al obtener datos del backend:', err);
          }
        });
        } catch (error) {
          console.log(error);
        }
      };
  
      async logout() {
        try {
          await this.authService.logout();
          console.log('Sesión cerrada correctamente');
          this.router.navigate(['/register']);
        } catch (error) {
          console.error('Error al cerrar sesión:', error);
        }
      }
      isInvalid(field: string): boolean {
        return (
          this.formLogin.controls[field].invalid &&
          (this.formLogin.controls[field].dirty ||
            this.formLogin.controls[field].touched)
        );
      }
      loginGoogle() {
        this.authService.loginWithGoogle()
        .then( response => {
          console.log(response);
          this.router.navigate(['/ships']);
        })
        .catch( error => {
          console.error('Error al loguear con Google:', error);
        });
  
  }
        
}
