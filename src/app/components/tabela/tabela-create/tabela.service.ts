import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError, map } from 'rxjs'
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { tabelaCrud } from '../tabelaCrud';
import { Router } from '@angular/router';
import { LoginService } from '../../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class TabelaService {
  baseUrl = "https://api.escapaybank-integracoes.com.br/tabelas";
  // baseUrl = 'http://localhost:3001/tabelas';
  baseUrlSimulado = 'https://api.escapaybank-integracoes.com.br/simulado';
  // baseUrlSimulado = 'http://localhost:3001/simulado';

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient,
    private router: Router,
    private loginService: LoginService
  ) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token || ''
    });
  }

  create(tabela: tabelaCrud): Observable<tabelaCrud> {
    tabela.key = new Date().getTime().toString();
    const headers = this.getHeaders();
    return this.http.post<tabelaCrud>(this.baseUrl, tabela, { headers }).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<tabelaCrud[]> {
    const headers = this.getHeaders();
    return this.http.get<tabelaCrud[]>(this.baseUrl, { headers, withCredentials: true }).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  readById(key: string): Observable<tabelaCrud> {
    const url = `${this.baseUrl}/${key}`
    const headers = this.getHeaders();
    return this.http.get<tabelaCrud>(url, { headers }).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }


  readByIdSelector(id: string): Observable<tabelaCrud> {
    const url = `${this.baseUrl}/${id}`
    const headers = this.getHeaders();
    return this.http.get<tabelaCrud>(url, { headers, withCredentials: true });
  }

  update(key: string, data: tabelaCrud): Observable<tabelaCrud> {
    const url = `${this.baseUrl}/update/${key}`
    const headers = this.getHeaders();
    return this.http.put<tabelaCrud>(url, data, { headers }).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(id: string): Observable<tabelaCrud> {
    const url = `${this.baseUrl}/delete/${id}`
    const headers = this.getHeaders();
    return this.http.delete<tabelaCrud>(url, { headers }).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  showMessage(msg: string) {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: "top",
    })
  }

  errorHandler(error: any): Observable<any> {
    console.error(error);
    if (error instanceof HttpErrorResponse) {
      if (error.status === 401 && error.error && error.error.error === "Acesso negado.") {
        this.showMessage('Acesso não autorizado, por favor faça login.');
      } else if (error.status === 403 && error.error && error.error.error === 'Token inválido.') {
        this.loginService.clearToken();
        this.router.navigate(['/login']);
        this.showMessage('Sua sessão expirou ou as credenciais são inválidas. Por favor, faça login novamente.');
      } else if (error.status === 400 && error.error && error.error.error === 'Email já  está  em uso.') {
        this.showMessage('Email já  está  em uso.');
      } else if (error.status === 401 && error.error && error.error.error && error.error.error === "Email ou senha incorreta.") {
        this.showMessage('Credenciais incorretas.');
      }
    }
    return EMPTY;
  }

  getTableById(id: string): Observable<tabelaCrud> {
    return this.readById(id).pipe()
  }

  navigateToDetails(prefix: string, variablePart: string): void {
    this.router.navigate([`${prefix}/${variablePart}`]);
  }

  readAllTables(): Observable<tabelaCrud[]> {
    const headers = this.getHeaders();
    return this.http.get<tabelaCrud[]>(this.baseUrlSimulado, { headers }).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }
}