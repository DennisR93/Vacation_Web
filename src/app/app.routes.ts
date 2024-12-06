import { Routes } from '@angular/router';
import {AppLayoutComponent} from './pages/app-layout/app-layout.component';
import {RegisterComponent} from './pages/register/register.component';
import {HomeComponent} from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children : [
      { path: 'home', component: HomeComponent },
      { path: 'register', component: RegisterComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  }
];
