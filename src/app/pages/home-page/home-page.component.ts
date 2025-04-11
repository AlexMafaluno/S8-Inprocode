import { Component } from '@angular/core';
import { ModalComponent } from "../../components/modal/modal.component";
import { AddButtonComponent } from "../../components/atoms/add-button/add-button.component";

@Component({
  selector: 'app-home-page',
  imports: [ModalComponent, AddButtonComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
