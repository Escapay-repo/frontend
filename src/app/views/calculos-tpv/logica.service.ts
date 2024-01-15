import { tabelaCrud } from './../../components/tabela/tabelaCrud';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { maquininhaCrud } from 'src/app/components/tabela/maquininhaCrud';

@Injectable({
  providedIn: 'root'
})
export class LogicaService {
  // private apiUrl = 'http://localhost:3001'
  private apiUrl = 'https://api.escapaybank-integracoes.com.br';

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
  ) { }
  masterShare: number = 0;
  visaShare: number = 0;
  outrosShare: number = 0;

  sharesUpdated = new EventEmitter();

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token || ''
    });
  }

  getShares(): { masterShare: number; visaShare: number; outrosShare: number } {
    return {
      masterShare: this.masterShare,
      visaShare: this.visaShare,
      outrosShare: this.outrosShare,
    };
  }

  readMaquininha(): Observable<maquininhaCrud[]> {
    const headers = this.getHeaders();
    return this.http.get<maquininhaCrud[]>(`${this.apiUrl}/maquininha`, { headers, withCredentials: true }).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  readMaquininhaById(key: string): Observable<maquininhaCrud> {
    const url = `${this.apiUrl}/maquininha/${key}`
    const headers = this.getHeaders();
    return this.http.get<maquininhaCrud>(url, { headers }).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }
  readTabela(): Observable<tabelaCrud[]> {
    const headers = this.getHeaders();
    return this.http.get<tabelaCrud[]>(`${this.apiUrl}/tabelas`, { headers, withCredentials: true }).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  readTabelaById(key: string): Observable<tabelaCrud> {
    const url = `${this.apiUrl}/tabelas/${key}`
    const headers = this.getHeaders();
    return this.http.get<tabelaCrud>(url, { headers }).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(error: any): Observable<any> {
    console.error(error);
    if (error instanceof HttpErrorResponse) {
      if (error.status === 401 && error.error) {
        this.showMessage('Acesso não autorizado, por favor faça login.', true);
      } else {
        this.showMessage('Ocorreu um Erro', true);
      }
    }
    return EMPTY;
  }
  showMessage(msg: string, isError: boolean = false) {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }
}