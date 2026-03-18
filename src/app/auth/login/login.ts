import { Component, inject } from '@angular/core';
import { AuthService } from '../services/users.services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export default class Login {
  private authService = inject(AuthService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  reason = this.route.snapshot.queryParamMap.get('reason');

  login(username: string, pass: string) {

    if (!username.trim()) return;

    this.authService.login(username, pass);

    this.router.navigateByUrl('/photos');
  }

}
