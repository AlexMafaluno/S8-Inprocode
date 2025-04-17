import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginFormComponent } from "../../components/organisms/login-form/login-form.component";

@Component({
  selector: 'app-login-page',
  imports: [RouterModule, LoginFormComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

}
