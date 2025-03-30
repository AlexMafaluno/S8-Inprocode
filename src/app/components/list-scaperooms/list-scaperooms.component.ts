import { Component, inject, OnInit } from '@angular/core';
import { ScapeRoom, ScapeRoomItem } from '../../interfaces/scaperoom';
import { ScaperoomService } from '../../services/scaperoom.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScapeRoomCardComponent } from "../scape-room-card/scape-room-card.component";
import { FilterComponent } from "../filter/filter.component";
import { CardComponent } from "../card/card.component";
import { ProgressSpinnerComponent } from "../progress-spinner/progress-spinner.component";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-scaperooms',
  imports: [CommonModule, RouterModule, FilterComponent, CardComponent, ProgressSpinnerComponent],
  templateUrl: './list-scaperooms.component.html',
  styleUrl: './list-scaperooms.component.scss',
})
export class ListScaperoomsComponent implements OnInit {
  listScapeRooms: ScapeRoom[] = [];
  private scaperoomService = inject(ScaperoomService);
  private toastr = inject(ToastrService);
  loading: boolean = false;

 ngOnInit(){
this.getlistScapeRooms();
  }

  getlistScapeRooms(){
    this.loading = true;
    this.scaperoomService.getListScapeRooms().subscribe({
      next: (response) => {
        console.log('Respuesta de la API:', response); // 🔍 Para verificar los datos
        console.log('📢 Tipo de response:', typeof response);
        this.listScapeRooms = Array.isArray(response) ? response : []; // ✅ Verifica que la respuesta sea un array
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al obtener escape rooms:', error);
        this.listScapeRooms = []; // En caso de error, evita que Angular intente iterar `undefined`
      }
    });
  }

  deleteScapeRoom(id: number){ {

    this.scaperoomService.deleteScapeRoom(id).subscribe(() =>{
      this.loading = true;
      this.getlistScapeRooms();
      this.loading = false;
      this.toastr.warning('El producto fue eliminado con exito', 'Producto eliminado');
    })
  }
}

}
