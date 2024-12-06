import { Routes } from '@angular/router';
import {AppLayoutComponent} from './pages/app-layout/app-layout.component';
import {RegisterComponent} from './pages/register/register.component';

export const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children : [
      {
        path: 'register', component: RegisterComponent
      }
    ]
  }
];
