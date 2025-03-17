import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MapComponent } from './pages/map/map.component';
import { FullcalendarComponent } from './pages/fullcalendar/fullcalendar.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { ListScaperoomsComponent } from './components/list-scaperooms/list-scaperooms.component';
import { ScapeRoomCardComponent} from './components/scape-room-card/scape-room-card.component';

export const routes: Routes = [
{path: '', pathMatch: 'full', redirectTo: '/home' },
{path: 'home', component: HomeComponent},
{path: 'map', component: MapComponent },
{path: 'callendar', component: FullcalendarComponent},
{path:'charts', component: ChartsComponent},
{path:'crud', component: ListScaperoomsComponent},
{path:'details', component: ScapeRoomCardComponent},
{path: '', redirectTo: 'home', pathMatch: 'full'},
{path: '**', redirectTo: ''}
];
