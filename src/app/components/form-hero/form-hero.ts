import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../../interfaces/hero.interface';

@Component({
  selector: 'app-form-hero',
  imports: [FormsModule],
  templateUrl: './form-hero.html',
  styleUrl: './form-hero.scss'
})
export class FormHero {
  heroes = signal<Hero[]>([]);

  newHero = output<Hero>();

  nameHeroSignal = signal('');
  alterEgoHeroSignal = signal('');
  ageHeroSignal = signal(0);

  addHero() {
    const newHero: Hero = {
      id: this.heroes().length + 1,
      name: this.nameHeroSignal(),
      alterEgo: this.alterEgoHeroSignal(),
      age: this.ageHeroSignal()
    };
    // this.heroes.update(heroes => [...heroes, newHero]);
    this.newHero.emit(newHero);
    console.log(this.heroes());
    this.resetForm();
  }

  resetForm() {
    this.nameHeroSignal.set('');
    this.alterEgoHeroSignal.set('');
    this.ageHeroSignal.set(0);
  }
}
