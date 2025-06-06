import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register-form',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
  formReg: FormGroup;
  private authService = inject(AuthService);
  private router = inject(Router);

  constructor(private fb: FormBuilder) {
    this.formReg = this.fb.group({
      mail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async createAccount() {
    if (this.formReg.invalid) {
      window.alert('Registro invalido');
      return;
    }
    const { mail, password } = this.formReg.value;
    try {
      this.authService.register(mail, password);
      this.router.navigate(['/login']);
      window.alert('Registro creado con éxito');
    } catch (error) {
      console.error(error);
    }
  }

  isInvalid(field: string): boolean {
    return (
      this.formReg.controls[field].invalid &&
      (this.formReg.controls[field].dirty ||
        this.formReg.controls[field].touched)
    );
  }
}
