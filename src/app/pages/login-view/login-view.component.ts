import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from "../../components/login/login.component";

@Component({
  selector: 'app-login-view',
  imports: [RouterModule, LoginComponent],
  templateUrl: './login-view.component.html',
  styleUrl: './login-view.component.scss'
})
export class LoginViewComponent {

}
