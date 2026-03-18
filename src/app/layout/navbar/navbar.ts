import { Component, inject, computed } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { MENU_OPTIONS } from '../services/menu-options';
import { AuthService } from '../../auth/services/users.services'
import { ThemeService } from '../services/theme.services'


@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  menuOptions = MENU_OPTIONS;
  themeService = inject(ThemeService);
  private authService = inject(AuthService);

  userName = computed(() => this.authService.user()?.name);
  currentTheme = this.themeService.theme;

  logout() {
    this.authService.logout();
  }

  login(u: string, p: string){
    this.authService.login(u, p);
  }

  toggle() {
    this.themeService.toggleTheme();
  }
}
