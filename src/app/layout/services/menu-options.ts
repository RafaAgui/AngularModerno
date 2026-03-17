import { Menu } from '../interfaces/menu.interface';

export const MENU_OPTIONS: Menu[] = [
  {
    id: 1,
    name: 'Photos',
    subname: 'Home',
    url: '/photos',
    icon: '/house.svg'
  },
  {
    id: 2,
    name: 'Trending',
    subname: 'Popular',
    url: '/trending',
    icon: '/trending.svg'
  },
  {
    id: 3,
    name: 'Search',
    subname: 'Find photos',
    url: '/search',
    icon: '/search.svg'
  },
  {
    id: 4,
    name: 'Login',
    subname: 'Login photos',
    url: '/login',
    icon: '/user.svg'
  }
];
