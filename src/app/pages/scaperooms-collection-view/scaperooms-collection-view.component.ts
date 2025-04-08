import { Component } from '@angular/core';
import { ListScaperoomsComponent } from '../../components/list-scaperooms/list-scaperooms.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../components/modal/modal.component';
import { FilterComponent } from "../../components/filter/filter.component";

@Component({
  selector: 'app-scaperooms-collection-view',
  imports: [ListScaperoomsComponent, CommonModule, ModalComponent, FilterComponent],
  templateUrl: './scaperooms-collection-view.component.html',
  styleUrl: './scaperooms-collection-view.component.scss'
})
export class ScaperoomsCollectionViewComponent {

}
