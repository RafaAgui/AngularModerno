import { Component } from '@angular/core';
import { TrendingPhotos } from './trending-photos/trending-photos';

@Component({
  standalone: true,
  selector: 'app-trending-page',
  imports: [TrendingPhotos],
  templateUrl: './trending-page.html',
  styleUrl: './trending-page.scss'
})
export default class TrendingPage {

}
