import { Routes } from '@angular/router';
import { HomeViewComponent } from './pages/home-view/home-view.component';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { ChartsComponent } from './components/charts/charts.component';
import { ListScaperoomsComponent } from './components/list-scaperooms/list-scaperooms.component';
import { ScapeRoomCardComponent } from './components/scape-room-card/scape-room-card.component';
import { ScaperoomsCollectionViewComponent } from './pages/scaperooms-collection-view/scaperooms-collection-view.component';
import { ModalComponent } from './components/modal/modal.component';
import { CallendarPageComponent } from './pages/callendar-page/callendar-page.component';
import { ChartPageComponent } from './pages/chart-page/chart-page.component';
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
  { path: '', pathMatch: 'full', redirectTo: '/login' },

  //Rutas de auth

  //Rutas publicas sin layout

  { path: 'login', component: LoginPageComponent },
  { path: 'register', component: RegisterPageComponent },

  //rutas protegidas con layout

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'profile',
        children: [
          {
            path:'',
        canMatch: [AuthGuard],
        loadComponent: () =>
          import('./pages/profile-page/profile-page.component').then(
            (m) => m.ProfilePageComponent
          ),
        },
        {
          path: 'charts',
          loadComponent: () =>
            import('./pages/chart-page/chart-page.component').then(
              (m) => m.ChartPageComponent
            ),
        }
        ]},
      {
        path: 'scaperooms',
        loadComponent: () =>
          import(
            './pages/scaperooms-collection-view/scaperooms-collection-view.component'
          ).then((m) => m.ScaperoomsCollectionViewComponent),
      },
      {
        path: 'scaperoom/:id',
        children: [
          {
            path: '',
            loadComponent: () =>
              import(
                './pages/card-detail-page/card-detail-page.component'
              ).then((m) => m.CardDetailPageComponent),
          },
          {
            path: 'map',
            loadComponent: () =>
              import('./pages/map-page/map-page.component').then((m) => m.MapPageComponent),
          },
          {
            path: 'callendar',
            loadComponent: () =>
              import('./pages/callendar-page/callendar-page.component').then(m => m.CallendarPageComponent)
           
            // children: [{ path: 'add', component: ModalEventComponent }],
          },
        ],
      },
    ],
  },
    


  // { path:'profile', component: ProfilePageComponent},

  //admin
  { path: 'crud', component: AdminCrudPageComponent },
  { path: 'crud/add', component: AddEditScaperoomComponent },
  { path: 'crud/edit/:id', component: AddEditScaperoomComponent },

  {
    path: 'callendar',
    component: CallendarPageComponent,
    children: [{ path: 'add', component: ModalEventComponent }],
  },

  { path: '**', redirectTo: 'profile', pathMatch: 'full' },
];
  
