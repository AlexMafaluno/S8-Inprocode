import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppError } from '../interfaces/app-error';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

errors: AppError[] = [];

  constructor(private http: HttpClient) { }
  logError(data: AppError){
  // Guarda localmente en memoria
  this.errors.push(data);
  console.log('Historial errores:',this.errors);
  
  // Enviar a backend si es necesario (poné aquí la URL real){
    return this.http.post('', data).
    subscribe({
      next: () => console.log('Error reportado al servidor'),
      error: (err) => console.warn('No se pudo enviar el error al servidor:', err),
    });
  }

  fetchErrors(){
    return this.http.get('').
    subscribe((data) => {
      console.log(data);
    });
  }


   // Opción: acceso de solo lectura desde afuera
   getErrors(): readonly AppError[] {
    return this.errors;
  }
}
