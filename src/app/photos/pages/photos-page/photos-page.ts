import { Component, signal,inject } from '@angular/core';
import { UnsplashPhoto } from '../../interfaces/unsplash.interfaces';
import { PhotosList } from '../../components/photos-list/photos-list';


@Component({
  standalone: true,
  selector: 'app-photos-page',
  imports: [PhotosList],
  templateUrl: './photos-page.html',
  styleUrl: './photos-page.scss'
})
export default class PhotosPage {
  photos = signal<UnsplashPhoto[]>([]);

}
