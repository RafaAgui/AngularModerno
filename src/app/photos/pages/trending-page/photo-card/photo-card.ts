import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";


@Component({
  selector: 'app-photo-card',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './photo-card.html',
  styleUrl: './photo-card.scss'
})
export class PhotoCard {
  imageUrl = input.required<string>();
  altPhoto = input.required<string>();
  idPhoto = input.required<string>();
}
