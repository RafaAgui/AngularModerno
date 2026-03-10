import { Component, inject, resource,input } from '@angular/core';
import { PhotoCard } from "../photo-card/photo-card";
import { SunsplashService } from "../../../../services/sunsplash.services";

@Component({
  standalone: true,
  selector: 'app-trending-photos',
  imports: [PhotoCard],
  templateUrl: './trending-photos.html',
  styleUrl: './trending-photos.scss',
})
export class TrendingPhotos {
  private sunsplashService = inject(SunsplashService);
  photosResource = resource({
    loader: () => this.sunsplashService.loadPhotosSunsplash()
  });
}




