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
  ageSignal = signal(45);
  name() {
    return this.nameSignal();
  }

  age() {
    return this.ageSignal();
  }

  getHeroDescription() {
    return `${this.name()} is ${this.age()} years old.`;
  }

  changeHero() {
    this.name = () => 'Captain America';
  }

  changeAge() {
    this.age = () => 40;
  }

  resetForm() {
    this.name = () => 'Rafael Aguilar';
    this.age = () => 54;
  }


}
