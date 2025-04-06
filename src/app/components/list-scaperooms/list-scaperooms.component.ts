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
import { PhotoService } from '../../services/photo.service';
import { Photo } from '../../interfaces/photo';

@Component({
  selector: 'app-list-scaperooms',
  imports: [CommonModule, RouterModule, FilterComponent, CardComponent, ProgressSpinnerComponent],
  templateUrl: './list-scaperooms.component.html',
  styleUrl: './list-scaperooms.component.scss',
})
export class ListScaperoomsComponent implements OnInit {
  listScapeRooms: ScapeRoom[] = [];
  userPhotos: Photo[] = [];
  userId: number = 359;

private photoService = inject(PhotoService);
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
        // Ahora obtenemos las fotos para el usuario
      this.loadUserPhotos(this.userId); // Usa el userId dinámico aquí
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al obtener escape rooms:', error);
        this.listScapeRooms = []; // En caso de error, evita que Angular intente iterar `undefined`
      }
    });
  }


  loadUserPhotos(userId: number): void {
    this.photoService.getPhotosByUser(userId).subscribe({
      next: (response) => {
        console.log('Respuesta de fotos:', response); // 🔍 Para verificar los datos
        console.log('📢 Tipo de response:', typeof response);
      this.userPhotos = Array.isArray(response) ? response : []; // Suponiendo que la respuesta contiene un array de fotos en 'data'
      // Ahora puedes asociar estas fotos con los scaperooms si lo necesitas
      this.attachPhotosToScaperooms();
    },
      error: (error) => { 
        console.error('Error al obtener fotos:', error);
        this.userPhotos = []; // En caso de error, evita que Angular intente iterar `undefined`
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


attachPhotosToScaperooms(): void {
  // Asumimos que las fotos tienen el campo 'scaperoom_id' para vincularlas con los scaperooms
  this.listScapeRooms = this.listScapeRooms.map(scaperoom => {
    const photo = this.userPhotos.find(photo => photo.scaperoom_id === scaperoom.id);
    return {
      ...scaperoom,
      imageUrl: photo ? photo.photoURL : undefined, // Añades la URL de la foto al scaperoom
    };
  });
}
}
