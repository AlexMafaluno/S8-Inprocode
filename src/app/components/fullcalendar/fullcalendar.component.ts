import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core/index.js';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-fullcalendar',
  imports: [CommonModule, FullCalendarModule],
  templateUrl: './fullcalendar.component.html',
  styleUrl: './fullcalendar.component.scss'
})
export class FullcalendarComponent implements AfterViewInit {
  private eventsService =inject(EventsService);

  @ViewChild('calendar') calendar: FullCalendarComponent | undefined; 

  
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: (arg) => this.handleDateClick(arg),
    events: [{title:"pepe", date:"2025-03-24"}]
  };


  ngAfterViewInit(): void {
 // Verifica si la referencia calendar está disponible
 if (this.calendar) {
  console.log('FullCalendar instance is available');
}
}

  handleDateClick(arg:any) {
    const selectedDate = arg.dateStr;
    alert('date click!' + selectedDate);

    const newEvent = {
      name: 'Nuevo evento',
      description: 'Descripción del evento',
      date: selectedDate,
      time: '18:00:00',
      people: 5
    };

    this.eventsService.addEvent(
      newEvent.name,
      newEvent.description,
      newEvent.date,
      newEvent.time,
      newEvent.people
    ).subscribe({
      next: response => 
        {console.log("evento agregado:", response);
      alert("evento agregado con exito:");

      if (Array.isArray(this.calendarOptions.events)) {
        this.calendarOptions.events.push({
          title: newEvent.name,
          date: newEvent.date
        });
      }
      if (this.calendar) {
        this.calendar.getApi().refetchEvents();  // Actualiza los eventos en el calendario
      }
    },
      error: err => {
        console.error("Error al agregar evento:",err);
        alert("Error al agregar el evento");
      }
    });
  }
}
