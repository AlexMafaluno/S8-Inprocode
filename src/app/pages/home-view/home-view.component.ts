import { Component } from '@angular/core';
import { ModalComponent } from "../../components/modal/modal.component";
import { AddButtonComponent } from "../../components/atoms/add-button/add-button.component";

@Component({
  selector: 'app-home-view',
  imports: [ModalComponent, AddButtonComponent],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.scss'
})
export class HomeViewComponent {

}
