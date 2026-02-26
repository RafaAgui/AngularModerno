import { Component, inject } from '@angular/core';
import { ListHero } from "../components/list-hero/list-hero";
import { FormHero } from '../components/form-hero/form-hero';
import { HerosService } from '../services/heros.service';




@Component({
  selector: 'app-add-hero',
  imports: [ListHero, FormHero],
  templateUrl: './add-hero.html',
  styleUrl: './add-hero.scss'
})
export class AddHero {
  public herosService = inject(HerosService);
}
