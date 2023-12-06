import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { catchError } from 'rxjs/operators'

@Component({
  selector: 'escapay-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user = { name: '', email: '', password: '' };
  confirmPassword = '';

  constructor(private loginService: LoginService) {}

  register() {
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
          // Você pode adicionar redirecionamento para a página de login ou outras ações necessárias após o cadastro
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
