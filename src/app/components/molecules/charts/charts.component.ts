import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ArcElement, Chart, Legend, PieController, Tooltip } from 'chart.js';

Chart.register(PieController, ArcElement, Tooltip, Legend);


@Component({
  selector: 'app-charts',
  imports: [],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.scss'
})
export class ChartsComponent implements OnInit, AfterViewInit{
  ngOnInit(): void {
    this.ngAfterViewInit();
  }
  

  myChart: any;
  ngAfterViewInit(): void {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
 
    if (ctx) {
      this.myChart = new Chart(ctx, {
        type: 'pie', // ✅ Cambiado de 'donut' a 'doughnut'
        data: {
          labels: ['Aventuras', 'Terror', 'Wild'],
          datasets: [{
            label: 'My first dataset',
            data: [50, 19, 3],
            borderWidth: 1,
            backgroundColor: [ // ✅ Movido dentro de datasets[0]
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            }
          }
        }
      });
}
  }
}
