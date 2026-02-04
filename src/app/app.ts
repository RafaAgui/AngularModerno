import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header'
import { Footer } from './layout/footer/footer'
import { NewsList } from "./news-list/news-list"


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, Header, Footer,
    NewsList
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('AngularPrueba');
}
