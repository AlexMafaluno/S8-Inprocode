import { Component, inject, OnInit } from '@angular/core';
import { ScapeRoomCardComponent } from "../../components/scape-room-card/scape-room-card.component";
import { ScaperoomService } from '../../services/scaperoom.service';
import { ActivatedRoute } from '@angular/router';
import { ScapeRoom } from '../../interfaces/scaperoom';

@Component({
  selector: 'app-card-detail-page',
  imports: [ScapeRoomCardComponent],
  templateUrl: './card-detail-page.component.html',
  styleUrl: './card-detail-page.component.scss'
})
export class CardDetailPageComponent implements OnInit {

selectedCard!: ScapeRoom;

private route = inject(ActivatedRoute);
private scaperoomService = inject(ScaperoomService);
constructor(){}
ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  console.log(id);
  this.scaperoomService.getScapeRoom(id).subscribe((scaperoom) => {
    console.log("ScapeRoom recibido:", scaperoom);
    this.selectedCard = scaperoom;
  })
}
}