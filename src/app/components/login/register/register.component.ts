import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { catchError } from 'rxjs/operators'
import { Router } from '@angular/router';

@Component({
  selector: 'escapay-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user = { name: '', email: '', password: '', admin: false, token: '' };
  confirmPassword = '';

  constructor(private loginService: LoginService, private router: Router) { }

  register() {
    if (this.user.name.length < 3) {
      alert('Digite seu nome completo.');
      return;
    }

    const emailValido = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+$/;
    if (!emailValido.test(this.user.email)) {
      alert('Digite um e-mail válido.');
      return;
    }

    // Adicione a lógica de validação da senha aqui
    if (this.user.password.length < 8 || !this.hasUpperCase(this.user.password) || !this.hasLowerCase(this.user.password) || !this.hasNumber(this.user.password)) {
      alert('A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula e um número.');
      return;
    }

    // Verifica se as senhas coincidem
    if (this.user.password !== this.confirmPassword) {
      alert('As senhas não coincidem.');
      return;
    }

    // Se todas as validações passarem, chame o serviço para registrar o usuário
    this.loginService.register(this.user)
      .pipe(
        catchError(error => {
          console.error('Erro ao cadastrar usuário:', error);
          // Trate os erros, exiba mensagens ou realize outras ações necessárias
          throw error; // Re-throw para manter o erro propagando para a próxima camada
        })
      )
      .subscribe({
        next: response => {
          console.log('Usuário cadastrado com sucesso:', response);
          this.router.navigate(['/']);
        },
        error: error => {
          console.error('Erro ao cadastrar usuário:', error);
          // Trate os erros, exiba mensagens ou realize outras ações necessárias
        }
      });
  }

  // Funções auxiliares para validação de senha
  private hasUpperCase(str: string): boolean {
    return /[A-Z]/.test(str);
  }

  private hasLowerCase(str: string): boolean {
    return /[a-z]/.test(str);
  }

  private hasNumber(str: string): boolean {
    return /\d/.test(str);
  }
}
