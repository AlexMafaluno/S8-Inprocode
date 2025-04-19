import { Component } from '@angular/core';
import { RegisterFormComponent } from "../../components/organisms/register-form/register-form.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register-page',
  imports: [RegisterFormComponent, RouterModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent {

}
