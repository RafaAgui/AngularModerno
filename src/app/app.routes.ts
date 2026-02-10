import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'news',
    pathMatch: 'full'
  },
  {
    path: 'news',
    loadComponent: () => import('./news-list/news-list').then(m => m.NewsList)
  },
  {
    path: 'counter',
    loadComponent: () => import('./counter/counter').then(m => m.Counter)
  },
  {
    path: 'hero',
    loadComponent: () => import('./hero-page/hero-page').then(m => m.HeroPage)
  }
];
