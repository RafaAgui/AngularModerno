import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./photos/pages/dashboard-page/dashboard-page')
  },

  {
    path: 'search',
    loadComponent: () => import('./photos/pages/search-page/search-page')
  },
  {
    path: 'trending',
    loadComponent: () => import('./photos/pages/trending-page/trending-page')
  },
    {
    path: '**',
    redirectTo: ''
  }
];
