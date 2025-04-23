import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Event } from '../../../interfaces/event';
import { EventsService } from '../../../services/events.service';
@Component({
  selector: 'app-modal-event',
  imports: [CommonModule, ReactiveFormsModule, RouterModule, FormsModule],
  templateUrl: './modal-event.component.html',
  styleUrl: './modal-event.component.scss',
})
export class ModalEventComponent implements OnInit {
  
  @Output() eventAdded = new EventEmitter<Event>();
  
  formEvent: FormGroup;
  private eventsService = inject(EventsService);
  private router = inject(Router);

  constructor(private fb: FormBuilder) {
    this.formEvent = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      people: ['1', Validators.required],
    });
  }
  ngOnInit(): void {
    
    this.testApiCall();
    this.addEvent();
  }

  addEvent() {

    if(this.formEvent.valid){
      const newEvent: Event = {
        ...this.formEvent.value,
        people: Number(this.formEvent.value.people) // Convierte a número
      };
    console.log("hola")
    console.log('📤 Datos del evento:', newEvent);

    this.eventsService
      .addEvent(
        newEvent.event_name,
        newEvent.description,
        newEvent.date ? newEvent.date.toString() : '',
        newEvent.time_start,
        newEvent.people
      )
      .subscribe({
        next: (response: Event) => {
          
          console.log(`El producto ${response} fue registrado con exito`, `evento registrado`);

          const addedEvent: Event = { ...newEvent };
          this.eventAdded.emit(addedEvent);
          this.router.navigate(['/callendar']);
        },
        error: (err) => {
          console.error("Error al guardar el evento:", err);
        }
      });
    };
      
  }


  testApiCall() {
    fetch('http://localhost:3000/event/save-Event', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: (JSON as typeof JSON).stringify({
        event_name: 'Test',
        description: 'Test event',
        date: '2024-05-01',
        time_start: '18:00',
        people: 5
      })
    } as RequestInit)
    .then((response: Response) => response.json())
    .then((data: any) => console.log('✅ Respuesta API:', data))
    .catch((error: any) => console.error('❌ Error:', error));
  }
}

