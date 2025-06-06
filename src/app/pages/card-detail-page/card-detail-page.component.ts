import { Component, inject, OnInit } from '@angular/core';
import { ScaperoomService } from '../../services/integration/scaperoom.service';
import { ActivatedRoute } from '@angular/router';
import { ScapeRoom } from '../../interfaces/scaperoom';
import { ScaperoomItemComponent } from "../../components/molecules/scaperoom-item/scaperoom-item.component";
import { ScaperoomFacadeService } from '../../services/business/scaperoom-facade.service';
import { ScaperoomDetailComponent } from '../../components/organisms/scaperoom-detail/scaperoom-detail.component';

@Component({
  selector: 'app-card-detail-page',
  imports: [ScaperoomDetailComponent, ScaperoomItemComponent],
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
  const scapeRooms = this.scaperoomFacadeService.scapeRooms();
  
  const scapeRoom = scapeRooms.find(room => room.id === id);
  
  if (scapeRoom) {
    this.selectedCard = scapeRoom;
  
  }else{
     // fallback: si no estaba cargado, lo pide manualmente
  this.scaperoomFacadeService.getScapeRoomWithPotos(359, 1).subscribe((res) => {
    this.scaperoomFacadeService.setScapeRooms(res);
    const fallbackRoom = res.find(r => r.id === id);
    if (fallbackRoom) this.selectedCard = fallbackRoom;
  });
  }

}
}