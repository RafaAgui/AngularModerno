import { Component, Input } from '@angular/core';
import { Hero } from '../../../interfaces/hero.interface';

@Component({
  selector: 'app-list-hero',
  imports: [],
  templateUrl: './list-hero.html',
  styleUrl: './list-hero.scss'
})
export class ListHero {
  @Input() heroes: Hero[] = [];
}
