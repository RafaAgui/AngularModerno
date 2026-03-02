import { effect, Injectable, signal } from "@angular/core";
import { Hero } from '../../interfaces/hero.interface';

const loadHeroes = (): Hero[] => {
  const heroesData = localStorage.getItem('heroes');
  return heroesData ? JSON.parse(heroesData) : [];
}
@Injectable({
  providedIn: "root",
})
export class HerosService {

heroes = signal<Hero[]>(loadHeroes());

saveLocalStorage = effect(() => {
  localStorage.setItem('heroes', JSON.stringify(this.heroes()));
});

addHero(hero: Hero) {
  this.heroes.update((heroes: Hero[]) => [...heroes, hero]);
}
}
