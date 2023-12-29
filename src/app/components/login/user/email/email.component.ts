import { Component } from '@angular/core';
import { LoginService } from '../../login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'escapay-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  currentEmail = '';
  newEmail = '';
  confirmEmail = '';

  constructor(private loginService: LoginService, private snackBar: MatSnackBar, private router: Router) { }

  isValidEmail(email: string): boolean {
    const emailValido = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+$/;
    return emailValido.test(email);
  }

  verifyEmailChange() {
    if (!this.isValidEmail(this.newEmail) || this.newEmail !== this.confirmEmail) {
      this.snackBar.open('Por favor, insira um e-mail válido e assegure-se de que os e-mails de confirmação coincidam.', 'Fechar', { duration: 3000 });
      return;
    }

    const confirmDialog = this.snackBar.open('O novo e-mail será seu novo login. Confirma a alteração?', 'Confirmar', { duration: 0 });
    confirmDialog.onAction().subscribe(() => {
      this.changeEmail();
    });
  }

  changeEmail() {
    this.loginService.changeEmail({ currentEmail: this.currentEmail, newEmail: this.newEmail })
      .subscribe({
        next: response => {
          this.snackBar.open('E-mail alterado com sucesso.', 'Fechar', { duration: 3000 });
          this.router.navigate(['user']);
        },
        error: error => {
          this.snackBar.open(error.error.error || 'Erro ao alterar o e-mail.', 'Fechar', { duration: 3000 });
        }
      });
  }
}