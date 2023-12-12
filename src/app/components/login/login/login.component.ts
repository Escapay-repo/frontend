import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'escapay-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private loginService: LoginService, private router: Router) { }

  login() {
    console.log('Tentativa de login:', this.email, this.password);
    const credentials = { email: this.email, password: this.password };

    this.loginService.login(credentials).subscribe({
      next: (response) => {
        console.log('Login bem-sucedido', response);
        const token = this.loginService.getToken();
        localStorage.setItem('token', token);
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Erro no login', error);
        this.loginService.showMessage('Email ou senha incorreta.', true);
      }
    });
  }
}