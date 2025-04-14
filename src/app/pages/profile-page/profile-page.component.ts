import { Component, inject } from '@angular/core';
import { AvatarPicComponent } from "../../components/atoms/avatar-pic/avatar-pic.component";
import { RouterModule } from '@angular/router';
import { AddButtonComponent } from "../../components/atoms/add-button/add-button.component";
import { CounterComponent } from "../../components/counter/counter.component";
import { ListScaperoomsComponent } from "../../components/list-scaperooms/list-scaperooms.component";
import { ScapeRoom } from '../../interfaces/scaperoom';
import { ExitButtonComponent } from "../../components/atoms/exit-button/exit-button.component";
import { LevelComponent } from "../../components/atoms/level/level.component";
import { UserBadgeComponent } from "../../components/user-badge/user-badge.component";
import { LevelService } from '../../services/level.service';

@Component({
  selector: 'app-profile-page',
  imports: [RouterModule, CounterComponent, ListScaperoomsComponent, ExitButtonComponent, UserBadgeComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent {
  private levelService = inject(LevelService);

achivements: { id: number; description: string, type:'logro' }[] = [
  {id:1, description: 'jugar 10 scape rooms', type:'logro'},
  {id:2, description: 'jugar 30 scape rooms', type:'logro'},
  {id:3, description: 'jugar 50 scape rooms',type:'logro'}
];

gainExperience(value: number){
 this.levelService.gainExperience(value);
 
}
}
