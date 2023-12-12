import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;

  // Simula o login com um token JWT
  login(token: string): void {
    // Lógica para verificar se o token é válido
    this.isAuthenticated = true;
    localStorage.setItem('token', token);
  }

  // Simula o logout
  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem('token');
  }

  // Verifica se o usuário está autenticado
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  // Obtém o token do usuário (pode ser usado para outras verificações)
  getToken(): string | null {
    return localStorage.getItem('token');
  }
}