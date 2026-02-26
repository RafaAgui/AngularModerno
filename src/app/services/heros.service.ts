import { effect, Injectable, signal } from "@angular/core";
import { Hero } from '../../interfaces/hero.interface';

@Injectable({
  providedIn: "root",
})
export class HerosService {

heroes = signal<Hero[]>([
  {
    id: 1,
    name: 'SpiderMan',
    alterEgo: 'Peter Parker',
    age: 16
  },
  {
    id: 2,
    name: 'Captain America',
    alterEgo: 'Steve Rogers',
    age: 40
  },
  {
    id: 3,
    name: 'Hulk',
    alterEgo: 'Bruce Banner',
    age: 45
  }
]);

saveLocalStorage = effect(() => {
  localStorage.setItem('heroes', JSON.stringify(this.heroes()));
});

addHero(hero: Hero) {
  this.heroes.update((heroes: Hero[]) => [...heroes, hero]);
}
}
