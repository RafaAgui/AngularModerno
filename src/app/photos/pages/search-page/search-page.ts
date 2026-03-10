import { Component, inject, signal, effect } from '@angular/core';
import { SunsplashService } from "../../../services/sunsplash.services";
import { UnsplashSearch } from '../../interfaces/unsplash.interfaces';
import { PhotoCard } from '../trending-page/photo-card/photo-card';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [PhotoCard],
  templateUrl: './search-page.html',
  styleUrl: './search-page.scss',
})
export default class SearchPage {
  private sunsplashService = inject(SunsplashService);
  photos = signal<UnsplashSearch[]>([]);
  lastQuery = signal('');
  searchHistory = signal<string[]>([]);

  constructor() {
    const saved = localStorage.getItem('unsplash-search');
    const history = localStorage.getItem('unsplash-history');
    if (history) {
      this.searchHistory.set(JSON.parse(history));
    }
    if (saved) {
      const data = JSON.parse(saved);
      this.photos.set(data.photos);
      this.lastQuery.set(data.query);
    }

    effect(() => {
      localStorage.setItem(
        'unsplash-search',
        JSON.stringify({
          query: this.lastQuery(),
          photos: this.photos()
        })
      );
    });
  }

  onSearch(query: string) {
    const history = [query, ...this.searchHistory().filter(q => q !== query)].slice(0, 5);
    this.searchHistory.set(history);
    localStorage.setItem('unsplash-history', JSON.stringify(history));

    if (!query.trim()) return;
    this.lastQuery.set(query);

    this.sunsplashService.searchPhoto(query).subscribe({
      next: (results) => {
        this.photos.set(results);
      },
      error: (err) => console.error('Error:', err)
    });
  }
}
