import { Component } from '@angular/core';
import { LevelComponent } from "../atoms/level/level.component";
import { RouterModule } from '@angular/router';
import { AvatarPicComponent } from "../atoms/avatar-pic/avatar-pic.component";
import { ProgressBarComponent } from "../atoms/progress-bar/progress-bar.component";

@Component({
  selector: 'app-user-badge',
  imports: [LevelComponent, RouterModule, AvatarPicComponent, ProgressBarComponent],
  templateUrl: './user-badge.component.html',
  styleUrl: './user-badge.component.scss'
})
export class UserBadgeComponent {

}
