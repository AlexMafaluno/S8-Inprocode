import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-modal-event',
  imports: [CommonModule, ReactiveFormsModule, RouterModule, FormsModule],
  templateUrl: './modal-event.component.html',
  styleUrl: './modal-event.component.scss'
})
export class ModalEventComponent implements OnInit{
formEvent: FormGroup;
 

 constructor(private fb: FormBuilder){
  this.formEvent = this.fb.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    time :['', Validators.required],
    people: ['', Validators.required]
  })
}
  ngOnInit(): void {
   this.addEvent();
  }

  addEvent(){

  }

}
