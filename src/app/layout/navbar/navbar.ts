import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { MENU_OPTIONS } from '../../services/menu-options';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  menuOptions = MENU_OPTIONS;
}
