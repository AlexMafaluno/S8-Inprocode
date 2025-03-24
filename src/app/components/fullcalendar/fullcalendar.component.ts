import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import {
  FullCalendarComponent,
  FullCalendarModule,
} from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core/index.js';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { EventsService } from '../../services/events.service';
import esLocale from '@fullcalendar/core/locales/es';
import { EventItem } from '../../interfaces/event';

@Component({
  selector: 'app-fullcalendar',
  imports: [CommonModule, FullCalendarModule],
  templateUrl: './fullcalendar.component.html',
  styleUrl: './fullcalendar.component.scss',
})
export class FullcalendarComponent implements OnInit, AfterViewInit {
  private eventsService = inject(EventsService);

  @ViewChild('calendar') calendar: FullCalendarComponent | undefined;

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: (arg) => this.handleDateClick(arg),
    locale: esLocale,
    eventClick: (arg) => this.handleEventClick(arg),
    events: [{ title: 'pepe', date: '2025-03-24' }],
    selectable: true, // Habilita la selección de eventos
  };


  ngOnInit(): void {
    this.loadEventsFromBackend();
  }


  ngAfterViewInit(): void {
    // Verifica si la referencia calendar está disponible
    if (this.calendar) {
      console.log('FullCalendar instance is available');
    }
  }

  handleDateClick(arg: any) {
    const selectedDate = arg.dateStr;
    alert('date click!' + selectedDate);

    const newEvent = {
      name: 'New',
      description: 'Descripción del evento',
      date: selectedDate,
      time: '18:00:00',
      people: 5,
    };

    this.eventsService
      .addEvent(
        newEvent.name,
        newEvent.description,
        newEvent.date,
        newEvent.time,
        newEvent.people
      )
      .subscribe({
        next: (response) => {
          console.log('evento agregado:', response);
          alert('evento agregado con exito:');

          if (Array.isArray(this.calendarOptions.events)) {
            this.calendarOptions.events = [
              ...this.calendarOptions.events,
              {
                title: newEvent.name,
                date: newEvent.date,
                time: newEvent.time,
                id: response.data.idEvents,
              },
            ];
          }
          if (this.calendar) {
            this.calendar.getApi().refetchEvents(); // Actualiza los eventos en el calendario
          }
        },
        error: (err) => {
          console.error('Error al agregar evento:', err);
          alert('Error al agregar el evento');
        },
      });
  }

  handleEventClick(arg: any) {
    if (
      confirm(
        `¿Estás seguro de que quieres borrar el evento ${arg.event.id}?`
      )
    ) {
      const eventId = arg.event.id;
      this.eventsService.deleteEvent(Number(eventId)).subscribe({
        next: () => {
          console.log('Evento eliminado con exito');

          if (Array.isArray(this.calendarOptions.events)) {
            this.calendarOptions.events = this.calendarOptions.events.filter(
              (event) => event.id !== eventId
            );
          }
        },
      });
    }
  }

  loadEventsFromBackend(){
    this.eventsService.getEvents().subscribe({
      next:(response: any)=> {
        if(response.data && Array.isArray(response.data)){
          this.calendarOptions.events = response.data.map((event: EventItem) => ({
            id:event.idEvents,
            title:event.event_name,
            date:event.date
          }));
        }
      },
      error:(error) => {
        console.log("Error al cargar eventos:", error);
      }
      });
    
  }
}
