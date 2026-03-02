import { Menu } from '../photos/interfaces/menu.interface';

export const MENU_OPTIONS: Menu[] = [
  {
    id: 1,
    name: 'Dashboard',
    subname: 'Home',
    url: '/dashboard',
    icon: '/house.svg'
  },
  {
    id: 3,
    name: 'Search',
    subname: 'Find photos',
    url: '/search',
    icon: '/search.svg'
  },
  {
    id: 2,
    name: 'Trending',
    subname: 'Popular',
    url: '/trending',
    icon: '/trending.svg'
  }
];
