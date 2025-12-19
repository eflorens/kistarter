import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'debug-items',
    loadComponent: () => import('./pages/debug-items/debug-items.component').then(m => m.DebugItemsComponent)
  },
  {
    path: '',
    redirectTo: 'debug-items',
    pathMatch: 'full'
  }
];
