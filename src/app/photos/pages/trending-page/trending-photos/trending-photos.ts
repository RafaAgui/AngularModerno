import { Component } from '@angular/core';
import { PhotoCard } from "../photo-card/photo-card";

@Component({
  selector: 'app-trending-photos',
  imports: [PhotoCard],
  templateUrl: './trending-photos.html',
  styleUrl: './trending-photos.scss',
})
export class TrendingPhotos {

}
