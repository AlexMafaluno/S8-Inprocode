import { Component } from '@angular/core';
import { FullcalendarComponent } from "../../components/fullcalendar/fullcalendar.component";
import { ModalEventComponent } from "../../components/modal-event/modal-event.component";
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-callendar-view',
  imports: [FullcalendarComponent, ModalEventComponent, RouterModule],
  templateUrl: './callendar-view.component.html',
  styleUrl: './callendar-view.component.scss'
})
export class CallendarViewComponent {

}
