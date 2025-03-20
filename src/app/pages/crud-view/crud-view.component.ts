import { Component } from '@angular/core';
import { ListScaperoomsComponent } from '../../components/list-scaperooms/list-scaperooms.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-crud-view',
  imports: [ListScaperoomsComponent,RouterOutlet, CommonModule,ModalComponent],
  templateUrl: './crud-view.component.html',
  styleUrl: './crud-view.component.scss'
})
export class CrudViewComponent {

}
