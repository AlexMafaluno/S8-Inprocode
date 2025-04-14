import { Component } from '@angular/core';
import { AvatarPicComponent } from "../../components/atoms/avatar-pic/avatar-pic.component";
import { RouterModule } from '@angular/router';
import { UserBadgeComponent } from "../../components/user-badge/user-badge.component";

@Component({
  selector: 'app-home-view',
  imports: [AvatarPicComponent, RouterModule, UserBadgeComponent],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.scss'
})
export class HomeViewComponent {

}
