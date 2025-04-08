import { inject, Injectable } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
private toastr =inject(ToastrService);
  
  constructor() { }

  success(message: string, title: string = 'Éxito') {
    this.toastr.success(message, title, {
      timeOut: 3000,
      positionClass: 'toast-bottom-right'
    });
  }

  error(message: string, title: string = 'Error') {
    this.toastr.error(message, title, {
      timeOut: 4000,
      positionClass: 'toast-bottom-right'
    });
  }

  warning(message: string, title: string = 'Atención') {
    this.toastr.warning(message, title, {
      timeOut: 3000,
      positionClass: 'toast-bottom-right'
    });
  }

  info(message: string, title: string = 'Info') {
    this.toastr.info(message, title, {
      timeOut: 3000,
      positionClass: 'toast-bottom-right'
    });
  }
}

