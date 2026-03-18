import { Routes } from '@angular/router';
import { authGuard } from './auth/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./auth/login/login')
  },
  {
    path: 'photos',
    canActivate: [authGuard],
    loadComponent: () => import('./photos/pages/photos-page/photos-page')
  },
  {
    path: 'search',
    canActivate: [authGuard],
    loadComponent: () => import('./photos/pages/search-page/search-page')
  },
  {
    path: 'trending',
    loadComponent: () => import('./photos/pages/trending-page/trending-page')
  },
  {
  path: 'photo/:idPhoto',
  canActivate: [authGuard],
  loadComponent: () => import('./photos/components/photo-detail/photo-detail')
  },
  {
    path: '**',
    redirectTo: ''
  }
];
