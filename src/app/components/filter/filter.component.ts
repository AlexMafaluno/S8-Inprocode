import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { AddButtonComponent } from "../atoms/add-button/add-button.component";
import { CounterComponent } from "../counter/counter.component";
import { DropdownButtomComponent } from "../dropdown-buttom/dropdown-buttom.component";
import { ScaperoomService } from '../../services/scaperoom.service';
import { ScapeRoom } from '../../interfaces/scaperoom';

@Component({
  selector: 'app-filter',
  imports: [DropdownButtomComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  @Output() filteredGenre = new EventEmitter<string>();
  selectedGenre: string ='';


  onGenreChange(genre: string){
    this.filteredGenre.emit(genre)
  }
}
  
 