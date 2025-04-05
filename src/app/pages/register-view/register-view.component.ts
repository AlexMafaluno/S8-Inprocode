import { Component } from '@angular/core';
import { RegisterComponent } from "../../components/register/register.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register-view',
  imports: [RegisterComponent, RouterModule],
  templateUrl: './register-view.component.html',
  styleUrl: './register-view.component.scss'
})
export class RegisterViewComponent {

}
