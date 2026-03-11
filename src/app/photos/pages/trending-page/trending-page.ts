import { Component, signal, computed} from '@angular/core';
import { UnsplashPhoto } from '../../interfaces/unsplash.interfaces';
import { PhotoCard } from '../../components/photo-card/photo-card';
@Component({
  standalone: true,
  selector: 'app-trending-page',
  imports: [ PhotoCard],
  templateUrl: './trending-page.html',
  styleUrl: './trending-page.scss'
})
export default class TrendingPage {

photos = signal<UnsplashPhoto[]>([]);

filteredPhotos = computed(() =>
  this.photos().filter(photo => photo.likes >= 1)
);
}
