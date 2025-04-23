import { Routes } from '@angular/router';
import { ModalEventComponent } from './components/organisms/modal-event/modal-event.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { AdminCrudPageComponent } from './pages/admin-crud-page/admin-crud-page.component';
import { AddEditScaperoomComponent } from './components/atoms/add-edit-scaperoom/add-edit-scaperoom.component';
import { LayoutComponent } from './Layouts/layout/layout.component';
import { adminGuard } from './shared/guards/admin.guard';

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
            path: '',
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
          },
        ],
      },
      {
        path: 'scaperooms',
        loadComponent: () =>
          import(
            './pages/scaperooms-collection-page/scaperooms-collection-page.component'
          ).then((m) => m.ScaperoomsCollectionPageComponent),
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
              import('./pages/map-page/map-page.component').then(
                (m) => m.MapPageComponent
              ),
          },
          {
            path: 'callendar',
            loadComponent: () =>
              import('./pages/callendar-page/callendar-page.component').then(
                (m) => m.CallendarPageComponent
              ),
            children: [{ path: 'callendar/add', component: ModalEventComponent }],
          },
        ],
      },
    ],
  },

  //admin
  { path: 'crud', component: AdminCrudPageComponent},
  { path: 'crud/add', component: AddEditScaperoomComponent },
  { path: 'crud/edit/:id', component: AddEditScaperoomComponent },

  // {
  //   path: 'callendar',
  //   component: CallendarPageComponent,
  //   children: [{ path: 'add', component: ModalEventComponent }],
  // },

  { path: '**', redirectTo: 'profile', pathMatch: 'full' },
];
