import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MapComponent } from './pages/map/map.component';
import { ChartsComponent } from './components/charts/charts.component';
import { ListScaperoomsComponent } from './components/list-scaperooms/list-scaperooms.component';
import { ScapeRoomCardComponent } from './components/scape-room-card/scape-room-card.component';
import { CrudViewComponent } from './pages/crud-view/crud-view.component';
import { ModalComponent } from './components/modal/modal.component';
import { CallendarViewComponent } from './pages/callendar-view/callendar-view.component';
<<<<<<< HEAD
import { ChartViewComponent } from './pages/chart-view/chart-view.component';
=======
import { ModalEventComponent } from './components/modal-event/modal-event.component';
>>>>>>> feature/callendar

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'map', component: MapComponent },
<<<<<<< HEAD
  { path: 'callendar', component: CallendarViewComponent },
  { path: 'charts', component: ChartViewComponent },


=======
  { path: 'callendar', component: CallendarViewComponent
    ,children: [
    { path: 'add', component: ModalEventComponent }
  ] },
  { path: 'charts', component: ChartsComponent },
>>>>>>> feature/callendar
  {
    path: 'crud',
    component: CrudViewComponent,
    children: [
      { path: 'add', component: ModalComponent },
      { path: 'edit/:id', component: ModalComponent } // 👈 Child route dentro de 'crud'
    ]
  },
  { path: 'card/:id', component: ScapeRoomCardComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: '' , pathMatch: 'full'},
];
