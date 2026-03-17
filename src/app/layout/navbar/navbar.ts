import { Component, inject, computed } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { MENU_OPTIONS } from '../services/menu-options';
import { AuthService } from '../../auth/services/users.services'


@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  menuOptions = MENU_OPTIONS;

  private authService = inject(AuthService);

  userName = computed(() => this.authService.user()?.name);

  logout() {
    this.authService.logout();
  }
}
