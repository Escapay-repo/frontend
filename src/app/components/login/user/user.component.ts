import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { User } from '../login.service';


@Component({
  selector: 'escapay-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User | null = null;

  constructor(private loginService: LoginService, private router: Router) { }
  ngOnInit(): void {
    this.loginService.getUserDetails().subscribe({
      next: (user) => {
        if (user) {
          this.user = user;
        } else {
          // Handle error or redirect to login
        }
      },
      error: (error) => {
        console.error('Erro ao obter detalhes do usuário:', error);
        // Handle error or redirect to login
      }
    });
  }
  logout() {
    this.loginService.clearToken();
    this.router.navigate(['/']);
  }
}