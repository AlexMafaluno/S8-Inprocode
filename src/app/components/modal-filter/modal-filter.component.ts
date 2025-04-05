import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-filter',
  imports: [],
  templateUrl: './modal-filter.component.html',
  styleUrl: './modal-filter.component.scss'
})
export class ModalFilterComponent {

@Output() sort = new EventEmitter<string>();

ordenarPor(criteria: string) {
this.sort.emit(criteria);
}

}
