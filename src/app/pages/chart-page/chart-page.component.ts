import { Component } from '@angular/core';
import { ChartsComponent } from "../../components/charts/charts.component";
import { ExitButtonComponent } from "../../components/atoms/exit-button/exit-button.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-chart-page',
  imports: [ChartsComponent, ExitButtonComponent,RouterModule],
  templateUrl: './chart-page.component.html',
  styleUrl: './chart-page.component.scss'
})
export class ChartPageComponent {

}
