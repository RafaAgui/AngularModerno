import { Injectable, signal, inject } from '@angular/core';
import { USERS_OPTIONS } from '../data/users.data';
import { Users } from '../interfaces/users.interfaces';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = signal<Users | null>(null);
  private router = inject(Router);

  constructor() {
    const savedUser = sessionStorage.getItem('user');

    if (savedUser) {
      this.user.set(JSON.parse(savedUser));
    }
  }

  login(username: string, password: string): boolean {

    const foundUser = USERS_OPTIONS.find(
      u => u.name === username && u.password === password
    );

    if (!foundUser) return false;

    sessionStorage.setItem('user', JSON.stringify(foundUser));

    this.user.set(foundUser);

    return true;
  }

  logout() {
    sessionStorage.removeItem('user');
    this.user.set(null);

    this.router.navigate(['/login'], {
      queryParams: { reason: 'auth-required' }
    });
  }

  isLogged() {
    return !!this.user();
  }


}
