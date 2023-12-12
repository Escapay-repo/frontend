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
    // Limpar informações de autenticação (por exemplo, remover o token)
    this.loginService.clearToken();

    // Redirecionar para a página de login (ou qualquer outra página desejada)
    this.router.navigate(['/login']);
  }
}