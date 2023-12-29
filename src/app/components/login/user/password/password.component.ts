import { Component } from '@angular/core';
import { LoginService } from '../../login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'escapay-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {
  hideCurrent: boolean = true;
  hideNew: boolean = true;
  hideConfirm: boolean = true;

  currentPassword = '';
  newPassword = '';
  confirmPassword = '';

  constructor(private loginService: LoginService, private snackBar: MatSnackBar, private router: Router) { }

  toggleVisibility(field: string, event: Event) {
    event.preventDefault();
    switch (field) {
      case 'current':
        this.hideCurrent = !this.hideCurrent;
        break;
      case 'new':
        this.hideNew = !this.hideNew;
        break;
      case 'confirm':
        this.hideConfirm = !this.hideConfirm;
        break;
    }
  }

  private hasUpperCase(str: string): boolean {
    return /[A-Z]/.test(str);
  }

  private hasLowerCase(str: string): boolean {
    return /[a-z]/.test(str);
  }

  private hasNumber(str: string): boolean {
    return /\d/.test(str);
  }

  changePassword() {
    // Verificar se a senha nova atende aos critérios no frontend
    if (this.newPassword.length < 8 || !this.hasUpperCase(this.newPassword) || !this.hasLowerCase(this.newPassword) || !this.hasNumber(this.newPassword)) {
      this.snackBar.open('A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula e um número.', 'Fechar', { duration: 3000 });
      return;
    }

    this.loginService.changePassword({
      currentPassword: this.currentPassword,
      newPassword: this.newPassword
    })
      .pipe(
        tap(response => {
          this.snackBar.open('Senha alterada com sucesso.', 'Fechar', { duration: 3000 });
          this.router.navigate(['user']);
        }),
        catchError(error => {
          console.log(error);
          this.snackBar.open(error.error.error || 'Erro ao alterar a senha.', 'Fechar', { duration: 3000 });
          return throwError(() => error);
        })
      )
      .subscribe();
  }
}