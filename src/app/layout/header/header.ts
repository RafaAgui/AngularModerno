import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { environment } from '@environments/environment';

@Component({
  selector: 'app-header',
  imports: [Navbar],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  envs = environment;
}
