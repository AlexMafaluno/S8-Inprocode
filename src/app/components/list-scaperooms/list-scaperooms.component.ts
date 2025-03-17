import { Component, inject, OnInit } from '@angular/core';
import { Scaperoom } from '../../interfaces/scaperoom';
import { ScaperoomService } from '../../services/scaperoom.service';

@Component({
  selector: 'app-list-scaperooms',
  imports: [],
  templateUrl: './list-scaperooms.component.html',
  styleUrl: './list-scaperooms.component.scss',
})
export class ListScaperoomsComponent implements OnInit {
  listScapeRooms: Scaperoom[] = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ];
  private scaperoomService = inject(ScaperoomService);
  
  ngOnInit():void{
this.getlistScapeRooms();
  }

  getlistScapeRooms(){
    this.scaperoomService.getListScapeRooms().subscribe((data)=>{
      console.log(data);
    })
  }
}
