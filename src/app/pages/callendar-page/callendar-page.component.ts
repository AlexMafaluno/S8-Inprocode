import { Component } from '@angular/core';
import { FullcalendarComponent } from "../../components/fullcalendar/fullcalendar.component";
import { ModalEventComponent } from "../../components/modal-event/modal-event.component";
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-callendar-page',
  imports: [FullcalendarComponent,CommonModule, RouterModule],
  templateUrl: './callendar-page.component.html',
  styleUrl: './callendar-page.component.scss'
})
export class CallendarPageComponent {

}
