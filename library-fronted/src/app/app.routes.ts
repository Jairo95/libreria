import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from "./components/login/login.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'dashboard' }
];

export const routing = RouterModule.forRoot(routes);
