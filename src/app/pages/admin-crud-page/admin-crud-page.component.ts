import { Component, inject, OnInit } from '@angular/core';
import { ListCrudComponent } from "../../components/organisms/list-crud/list-crud.component";
import { ScapeRoom } from '../../interfaces/scaperoom';
import { RouterModule } from '@angular/router';
import { ScaperoomService } from '../../services/scaperoom.service';

@Component({
  selector: 'app-admin-crud-page',
  imports: [ListCrudComponent,RouterModule],
  templateUrl: './admin-crud-page.component.html',
  styleUrl: './admin-crud-page.component.scss'
})
export class AdminCrudPageComponent implements OnInit {


  listScapeRooms :ScapeRoom[] = [];
   private scapeRoomService= inject(ScaperoomService)
  
  loadScapeRooms() {
    this.scapeRoomService.getAllScapeRooms().subscribe((data:ScapeRoom[]) => {
      this.listScapeRooms = data;
      console.log("Data:", data);
    });
  }

  ngOnInit(): void {
    this.loadScapeRooms();
  }

  formUpdated(updatedRoom: ScapeRoom) {
  console.log('Formulario actualizado desde el hijo:', updatedRoom);
  this.loadScapeRooms(); // Recargar la lista después de actualizar
    }
}
