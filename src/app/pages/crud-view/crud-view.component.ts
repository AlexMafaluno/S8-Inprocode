import { Component } from '@angular/core';
import { ListScaperoomsComponent } from '../../components/list-scaperooms/list-scaperooms.component';
import { RouterOutlet } from '@angular/router';
import { ModalLayoutComponent } from '../../Layouts/modal-layout/modal-layout.component';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-crud-view',
  imports: [ListScaperoomsComponent,RouterOutlet, CommonModule, ModalLayoutComponent,ModalComponent],
  templateUrl: './crud-view.component.html',
  styleUrl: './crud-view.component.scss'
})
export class CrudViewComponent {
  isModalVisible = true;

  openModal() {
    console.log('🔵 openModal() ejecutado');
    this.isModalVisible = true;
    console.log('Estado de isModalVisible:', this.isModalVisible)
  
  }

  closeModal() {
    this.isModalVisible = false;
  }
}
