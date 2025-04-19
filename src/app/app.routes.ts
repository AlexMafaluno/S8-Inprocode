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
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { AdminCrudPageComponent } from './pages/admin-crud-page/admin-crud-page.component';
import { AddEditScaperoomComponent } from './components/add-edit-scaperoom/add-edit-scaperoom.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { LayoutComponent } from './Layouts/layout/layout.component';

export const routes: Routes = [
 // { path: '', pathMatch: 'full', redirectTo: '/login' },
//Rutas de auth

//Rutas publicas sin layout

{path: "login", component: LoginPageComponent},
{path: "register", component: RegisterPageComponent},

//rutas protegidas con layout

{path:'', component: LayoutComponent,
  children: [
    { path: 'home', component: HomeViewComponent, canMatch: [AuthGuard]},
    {
      path: 'scaperooms',
      component: ScaperoomsCollectionViewComponent},
    { path: 'scaperoom/:id', component: CardDetailPageComponent},
    { path:'profile', component: ProfilePageComponent},
     
    //admin
    {path: 'crud', component: AdminCrudPageComponent},
    {path: 'crud/add', component: AddEditScaperoomComponent},
    {path: 'crud/edit/:id', component: AddEditScaperoomComponent},
  
  ]
}

  
  ,{ path: 'map', component: MapComponent },
  { path: 'callendar', component: CallendarViewComponent
    ,children: [
    { path: 'add', component: ModalEventComponent }
  ] },
  { path: 'charts', component: ChartsComponent },
  
 
  
  
 
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' , pathMatch: 'full'},
];
