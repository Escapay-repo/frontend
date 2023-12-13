import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'escapay-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  constructor(private loginService: LoginService, private router: Router) { }

  logout() {
    this.loginService.clearToken();
    this.router.navigate(['/']);
  }
}