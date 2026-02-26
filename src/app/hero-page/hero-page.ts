import { Component, signal } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.html',
  styleUrl: './hero-page.scss',
  imports: [UpperCasePipe]
})
export class HeroPage {
  uppercase = new UpperCasePipe();

  nameSignal = signal('Iron Man');
  alteregoSignal = signal('Tony Stark');
  ageSignal = signal(45);
  name() {
    return this.nameSignal();
  }

  alterego() {
    return this.alteregoSignal();
  }

  age() {
    return this.ageSignal();
  }

  getHeroDescription() {
    return `${this.name()} (${this.alterego()}) is ${this.age()} years old.`;
  }

  changeHero() {
    this.nameSignal.set('Captain America');
    this.alteregoSignal.set('Steve Rogers');
  }

  changeAge() {
    this.ageSignal.set(40);
  }

  resetForm() {
    this.nameSignal.set('Leafar');
    this.alteregoSignal.set('Rafael Aguilar');
    this.ageSignal.set(54);
  }


}
