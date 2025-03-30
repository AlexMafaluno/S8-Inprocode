import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown-buttom',
  imports: [],
  templateUrl: './dropdown-buttom.component.html',
  styleUrl: './dropdown-buttom.component.scss'
})
export class DropdownButtomComponent {

@Output() genreSelected = new EventEmitter<string>(); 
selectGenre(genre:string){
  console.log('Género seleccionado:', genre);
  console.log(typeof genre);
this.genreSelected.emit(genre);
}
}
