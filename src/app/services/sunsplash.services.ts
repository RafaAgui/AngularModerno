import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, map } from 'rxjs';
import { UnsplashPhoto, UnsplashSearch } from '../photos/interfaces/unsplash.interfaces';
import { environment } from '@environments/environment.development';



@Injectable({
  providedIn: 'root' // Esto lo hace disponible en toda la app sin declararlo en módulos
})
export class SunsplashService {
  private http = inject(HttpClient);
  private readonly API_URL = 'https://api.unsplash.com/photos';
  private readonly ACCESS_KEY = environment.accessKey;
  private readonly API_SEARCH = 'https://api.unsplash.com/search/photos'

  async loadPhotosSunsplash(): Promise<UnsplashPhoto[]> {
    const response$ = this.http.get<UnsplashPhoto[]>(this.API_URL, {
      params: { client_id: this.ACCESS_KEY, per_page: 20 }
    });
    return firstValueFrom(response$);
  }

  searchPhoto(query: string) {
    const searcher = this.http.get<{ results: UnsplashSearch[] }>(this.API_SEARCH , {
      params: { client_id: this.ACCESS_KEY, per_page: 5,  query: query}
    }).pipe(
      map(response => response.results)
    );
    return searcher;
  }

  getPhotoById(id: string) {
    return this.http.get<UnsplashPhoto>(
      `${this.API_URL}/${id}?client_id=${this.ACCESS_KEY}`
    );
  }
}
