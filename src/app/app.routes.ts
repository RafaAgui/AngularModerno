import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./photos/pages/photos-page/photos-page')
  },

  {
    path: 'search',
    loadComponent: () => import('./photos/pages/search-page/search-page')
  },
  {
    path: 'photo',
    loadComponent: () => import('./photos/pages/trending-page/trending-page')
  },
  {
  path: 'photo/:idPhoto',
  loadComponent: () => import('./photos/components/photo-detail/photo-detail')

  },
  {
    path: '**',
    redirectTo: ''
  }
];
