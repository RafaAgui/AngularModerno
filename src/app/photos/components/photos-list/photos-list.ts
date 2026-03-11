import { Component, inject, resource,input } from '@angular/core';
import { PhotoCard } from "../photo-card/photo-card";
import { SunsplashService } from "../../services/sunsplash.services";

@Component({
  standalone: true,
  selector: 'app-photos-list',
  imports: [PhotoCard],
  templateUrl: './photos-list.html',
  styleUrl: './photos-list.scss',
})
export class PhotosList {
  private sunsplashService = inject(SunsplashService);
  photosResource = resource({
    loader: () => this.sunsplashService.loadPhotosSunsplash()
  });
}




