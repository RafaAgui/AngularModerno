import { Component, Input } from '@angular/core';
import { PHOTOS_OPTIONS } from '../../../../services/photos.service';


@Component({
  selector: 'app-photo-card',
  imports: [],
  templateUrl: './photo-card.html',
  styleUrl: './photo-card.scss'
})
export class PhotoCard {
  photoOptions = PHOTOS_OPTIONS;
}
