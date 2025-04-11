import { Routes } from '@angular/router';
import { HomeViewComponent } from './pages/home-view/home-view.component';
import { MapComponent } from './pages/map/map.component';
import { ChartsComponent } from './components/charts/charts.component';
import { ListScaperoomsComponent } from './components/list-scaperooms/list-scaperooms.component';
import { ScapeRoomCardComponent } from './components/scape-room-card/scape-room-card.component';
import { ScaperoomsCollectionViewComponent } from './pages/scaperooms-collection-view/scaperooms-collection-view.component';
import { ModalComponent } from './components/modal/modal.component';
import { CallendarViewComponent } from './pages/callendar-view/callendar-view.component';
import { ChartViewComponent } from './pages/chart-view/chart-view.component';
import { ModalEventComponent } from './components/modal-event/modal-event.component';
import { CardDetailPageComponent } from './pages/card-detail-page/card-detail-page.component';
import { LoginViewComponent } from './pages/login-view/login-view.component';
import { RegisterViewComponent } from './pages/register-view/register-view.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminCrudPageComponent } from './pages/admin-crud-page/admin-crud-page.component';
import { AddEditScaperoomComponent } from './components/add-edit-scaperoom/add-edit-scaperoom.component';

export const routes: Routes = [
 // { path: '', pathMatch: 'full', redirectTo: '/login' },
//Rutas de auth
  {path: "login", component: LoginViewComponent},
  {path: "register", component: RegisterViewComponent},

  { path: 'home', component: HomeViewComponent, canMatch: [AuthGuard]},
  { path: 'map', component: MapComponent },
  { path: 'callendar', component: CallendarViewComponent
    ,children: [
    { path: 'add', component: ModalEventComponent }
  ] },
  { path: 'charts', component: ChartsComponent },
  
  //admin
  {path: 'crud', component: AdminCrudPageComponent},
  {path: 'crud/add', component: AddEditScaperoomComponent},
  {path: 'crud/edit/:id', component: AddEditScaperoomComponent},
  
  {
    path: 'scaperooms',
    component: ScaperoomsCollectionViewComponent,
    // children: [
    //   { path: 'add', component: ModalComponent },
    //   { path: 'edit/:id', component: ModalComponent } // 👈 Child route dentro de 'crud'
    // ]
  },
  { path: 'card/:id', component: CardDetailPageComponent  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' , pathMatch: 'full'},
];
