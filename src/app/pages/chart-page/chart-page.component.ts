import { Component } from '@angular/core';

import { ExitButtonComponent } from "../../components/atoms/exit-button/exit-button.component";
import { RouterModule } from '@angular/router';
import { ChartsComponent } from '../../components/molecules/charts/charts.component';

@Component({
  selector: 'app-chart-page',
  imports: [ChartsComponent, ExitButtonComponent, RouterModule],
  templateUrl: './chart-page.component.html',
  styleUrl: './chart-page.component.scss'
})
export class ChartPageComponent {

}
