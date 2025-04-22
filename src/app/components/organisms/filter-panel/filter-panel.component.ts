import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { AddButtonComponent } from "../../atoms/add-button/add-button.component";
import { CounterComponent } from "../../counter/counter.component";
import { DropdownButtomComponent } from "../../molecules/dropdown-buttom/dropdown-buttom.component";
import { ScaperoomService } from '../../../services/scaperoom.service';
import { ScapeRoom } from '../../../interfaces/scaperoom';

@Component({
  selector: 'app-filter-panel',
  imports: [DropdownButtomComponent],
  templateUrl: './filter-panel.component.html',
  styleUrl: './filter-panel.component.scss'
})
export class FilterPanelComponent {

  @Output() filteredGenre = new EventEmitter<string>();
  selectedGenre: string ='';


  onGenreChange(genre: string){
    this.filteredGenre.emit(genre)
  }
}
  
 