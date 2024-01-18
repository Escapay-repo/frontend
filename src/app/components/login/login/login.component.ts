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
    const credentials = { email: this.email, password: this.password, dateLogin: new Date() };

    this.loginService.login(credentials).subscribe({
      next: (response) => {
        const isAdmin = response.admin;
        localStorage.setItem('isAdmin', isAdmin.toString());
        const token = this.loginService.getToken();
        localStorage.setItem('token', token);
        // console.log('credenciais', credentials)
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Erro no login', error);
        this.loginService.showMessage('Email ou senha incorreta.');
      }
    });
  }
}