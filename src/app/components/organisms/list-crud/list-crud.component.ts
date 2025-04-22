import { Component, inject, Input, OnInit } from '@angular/core';
import { ScapeRoom } from '../../../interfaces/scaperoom';
import { CommonModule } from '@angular/common';
import { AddButtonComponent } from "../../atoms/add-button/add-button.component";
import { EditButtonComponent } from "../../atoms/edit-button/edit-button.component";
import { DeleteButtonComponent } from "../../atoms/delete-button/delete-button.component";
import { RouterModule } from '@angular/router';
import { ScaperoomService } from '../../../services/scaperoom.service';

@Component({
  selector: 'app-list-crud',
  imports: [CommonModule, AddButtonComponent, EditButtonComponent, DeleteButtonComponent, RouterModule],
  templateUrl: './list-crud.component.html',
  styleUrl: './list-crud.component.scss'
})
export class ListCrudComponent{
  @Input() listScapeRooms: ScapeRoom[] = [];


}
