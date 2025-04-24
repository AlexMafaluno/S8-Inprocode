import { Component, inject, OnInit } from '@angular/core';
import { AvatarPicComponent } from "../../components/atoms/avatar-pic/avatar-pic.component";
import { RouterModule } from '@angular/router';
import { AddButtonComponent } from "../../components/atoms/add-button/add-button.component";
import { CounterComponent } from "../../components/atoms/counter/counter.component";
import { ListScaperoomsComponent } from "../../components/organisms/list-scaperooms/list-scaperooms.component";
import { ScapeRoom } from '../../interfaces/scaperoom';
import { ExitButtonComponent } from "../../components/atoms/exit-button/exit-button.component";
import { LevelComponent } from "../../components/atoms/level/level.component";
import { UserBadgeComponent } from "../../components/organisms/user-badge/user-badge.component";
import { LevelService } from '../../services/business/level.service';
import { ExperienceComponent } from "../../components/atoms/experience/experience.component";
import { AchivementsService } from '../../services/business/achivements.service';
import { CounterService } from '../../services/business/counter.service';
import { UserStatsComponent } from "../../components/organisms/user-stats/user-stats.component";

@Component({
  selector: 'app-profile-page',
  imports: [RouterModule, ListScaperoomsComponent,  UserBadgeComponent, UserStatsComponent],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent implements OnInit{
private levelService = inject(LevelService);
private counterService = inject(CounterService);
private achivementsService = inject(AchivementsService)
achivements: any = [];

ngOnInit(): void {
  this.achivements = this.achivementsService.getAchivements();
}

}
