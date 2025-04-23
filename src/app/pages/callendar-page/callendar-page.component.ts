import { Component } from '@angular/core';
import { FullcalendarComponent } from "../../components/molecules/fullcalendar/fullcalendar.component";
import { ModalEventComponent } from "../../components/organisms/modal-event/modal-event.component";
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ExitButtonComponent } from "../../components/atoms/exit-button/exit-button.component";

@Component({
  selector: 'app-callendar-page',
  imports: [FullcalendarComponent, CommonModule, RouterModule, ExitButtonComponent],
  templateUrl: './callendar-page.component.html',
  styleUrl: './callendar-page.component.scss'
})
export class CallendarPageComponent {

}
