import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsCard } from '../news-card/news-card';

@Component({
  selector: 'app-news-list',
  standalone: true,
  imports: [CommonModule, NewsCard],
  templateUrl: './news-list.html',
  styleUrls: ['./news-list.scss'],
})
export class NewsList {
  news = [
    {
      date: '29 Abril, 2023',
      title: 'Polar Plunge recauda 60.000 dólares en Wet n’ Wild Emerald Pointe',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      tags: ['Parque acuático', 'EEUU'],
    },
    {
      date: '24 Marzo, 2023',
      title: 'Grupo Parques Reunidos contra el desperdicio de alimentos',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
      tags: ['Cuidado del planeta'],
    },
    {
      date: '29 Abril, 2023',
      title: 'Splish Splash y la inclusión de personas con autismo',
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
      tags: ['Inclusión', 'Autismo'],
    },
    {
      date: '24 Marzo, 2023',
      title: 'Un año de grandes eventos por el 50.º aniversario del Zoo de Madrid',
      image: 'https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=400&q=80',
      tags: ['Cuidado del planeta'],
    },
  ];
}
