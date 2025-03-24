import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Scaperoom, ScapeRoomItem } from '../../interfaces/scaperoom';

@Component({
  selector: 'app-modal',
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit{
 form: FormGroup;
 

 constructor(private fb: FormBuilder){
  this.form = this.fb.group({
    title: ['', Validators.required],
    director: ['', Validators.required]
  })
}
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }


  

addProduct(){
  const scapeRoom: ScapeRoomItem = {
    title: this.form.value.title,
    director: this.form.value.director
  }
  console.log(scapeRoom);
}
}
