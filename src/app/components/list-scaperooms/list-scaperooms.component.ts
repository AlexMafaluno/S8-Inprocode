import { Component, inject, OnInit } from '@angular/core';
import { Scaperoom, ScapeRoomItem } from '../../interfaces/scaperoom';
import { ScaperoomService } from '../../services/scaperoom.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScapeRoomCardComponent } from "../scape-room-card/scape-room-card.component";

@Component({
  selector: 'app-list-scaperooms',
  imports: [CommonModule, RouterModule],
  templateUrl: './list-scaperooms.component.html',
  styleUrl: './list-scaperooms.component.scss',
})
export class ListScaperoomsComponent implements OnInit {
  listScapeRooms: ScapeRoomItem[] = [];
  private scaperoomService = inject(ScaperoomService);
  
 ngOnInit(){
this.getlistScapeRooms();
  }

  getlistScapeRooms(){
    this.scaperoomService.getListScapeRooms().subscribe({
      next: (response) => {
        console.log('Respuesta de la API:', response); // 🔍 Para verificar los datos
        console.log('📢 Tipo de response:', typeof response);
        this.listScapeRooms = response.data || []; // ✅ Asigna directamente la respuesta
      },
      error: (error) => {
        console.error('Error al obtener escape rooms:', error);
        this.listScapeRooms = []; // En caso de error, evita que Angular intente iterar `undefined`
      }
    });
  }

  deleteScapeRoom(id: number) {

    this.scaperoomService.deleteScapeRoom(id).subscribe(() =>{
      //arra loadig = true
      this.getlistScapeRooms();
      //arra loadig = false;
    })
  }
}
