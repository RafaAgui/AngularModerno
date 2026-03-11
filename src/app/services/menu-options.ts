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
    id: 3,
    name: 'Search',
    subname: 'Find photos',
    url: '/search',
    icon: '/search.svg'
  },
  {
    id: 2,
    name: 'Photo',
    subname: 'Popular',
    url: '/photo',
    icon: '/trending.svg'
  }
];
