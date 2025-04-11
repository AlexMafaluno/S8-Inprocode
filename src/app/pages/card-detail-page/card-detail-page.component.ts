import { Component, inject, OnInit } from '@angular/core';
import { ScapeRoomCardComponent } from "../../components/scape-room-card/scape-room-card.component";
import { ScaperoomService } from '../../services/scaperoom.service';
import { ActivatedRoute } from '@angular/router';
import { ScapeRoom } from '../../interfaces/scaperoom';
import { CardComponent } from "../../components/card/card.component";
import { ScaperoomFacadeService } from '../../services/scaperoom-facade.service';

@Component({
  selector: 'app-card-detail-page',
  imports: [ScapeRoomCardComponent, CardComponent],
  templateUrl: './card-detail-page.component.html',
  styleUrl: './card-detail-page.component.scss'
})
export class CardDetailPageComponent implements OnInit {

selectedCard!: ScapeRoom;

private route = inject(ActivatedRoute);
private scaperoomService = inject(ScaperoomService);
private scaperoomFacadeService = inject(ScaperoomFacadeService)
constructor(){}
ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  const userId = 359; 
  
  this.scaperoomFacadeService.getScapeRoomWithPotos(userId).subscribe((scapeRooms) => {
    const scaperoom = scapeRooms.find(room => room.id === id);
    if (scaperoom) {
      this.selectedCard = scaperoom;
      console.log("ScapeRoom con foto:", this.selectedCard);
    } else {
      console.warn(`No se encontró un scaperoom con id ${id}`);
    }
  });
  /*
  this.scaperoomService.getScapeRoom(id).subscribe((scaperoom) => {
    console.log("ScapeRoom recibido:", scaperoom);
    this.selectedCard = scaperoom;
  })
    */
}
}