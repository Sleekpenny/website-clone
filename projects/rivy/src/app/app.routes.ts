import { Routes } from '@angular/router';
import { mainRoutes } from './pages/main/main.route';
export const routes: Routes = [

  {path: '', redirectTo:'main', pathMatch: 'full'},
  {path: 'main', loadComponent: () => import('./pages/main/main.page').then(m => m.MainPage), children: mainRoutes},

];
