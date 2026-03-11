import { Component, input, inject, computed, effect } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { SunsplashService } from '../../services/sunsplash.services';

@Component({
  standalone: true,
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.html',
  styleUrl: './photo-detail.scss'
})
export default class PhotoDetail {

  idPhoto = input.required<string>();

  getPhoto = computed(() => ({
    photo: this.photoResource.value(),
    loading: this.photoResource.isLoading(),
    error: this.photoResource.error(),
    author: this.photoResource.value()?.user?.name,
    portfolio: this.photoResource.value()?.user?.portfolio_url,
    bio: this.photoResource.value()?.user?.bio,
    description: this.photoResource.value()?.alt_description
  }));

  private sunsplashService = inject(SunsplashService);

  photoResource = rxResource({
    params: () => this.idPhoto(),
    stream: ({ params }) => this.sunsplashService.getPhotoById(params)
  });

   constructor() {
    effect(() => {
      console.log('Photo ID:', this.idPhoto());
    });
  }

}
