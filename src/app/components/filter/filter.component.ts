import { Component, EventEmitter, inject, Output } from '@angular/core';
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

  private scaperoomService = inject(ScaperoomService);
  @Output() filtered = new EventEmitter<ScapeRoom[]>();
  list: ScapeRoom[] = [];
  selectedGenre: string = 'default';

  onGenreChange(genre: string){
  
    if (genre === 'default') {
      this.filtered.emit([]); // emitir vacío o lista original
      return;
    }
    
    
    console.log('Filtrando por género:', genre);
    this.scaperoomService.getScapeRoomByGenre(genre).subscribe({
      next:(response) => {
        console.log('Scaperooms filtrados:',response);
        this.filtered.emit(response); // Emitimos al padre
      },
      error: (err) => {
        console.error('Error al filtrar:', err);
      }
    })
        
    }
}
    