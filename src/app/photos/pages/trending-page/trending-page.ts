import { Component, computed, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { SunsplashService } from '../../services/sunsplash.services';
import { PhotoCard } from '../../components/photo-card/photo-card';

@Component({
  standalone: true,
  selector: 'app-trending-page',
  imports: [PhotoCard],
  templateUrl: './trending-page.html',
  styleUrl: './trending-page.scss'
})
export default class TrendingPage {

  private sunsplashService = inject(SunsplashService);

  trendingResource = rxResource({
    stream: () => this.sunsplashService.getTrending()
  });

  filteredPhotos = computed(() =>
    (this.trendingResource.value() ?? []).filter(photo => photo.likes >= 25)
  );

}
