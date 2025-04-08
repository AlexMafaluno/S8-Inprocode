import { Component, inject, OnInit, signal, Signal } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent{

counter = inject(CounterService).count; 
}
