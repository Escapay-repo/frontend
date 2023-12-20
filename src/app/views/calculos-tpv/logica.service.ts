import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { maquininhaCrud } from 'src/app/components/tabela/maquininhaCrud';

@Injectable({
  providedIn: 'root'
})
export class LogicaService {

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
    return this.http.get<maquininhaCrud[]>(
      // 'http://localhost:3001/maquininha'
      'https://api.gusmfscoder.com.br/maquininha'
      , { headers, withCredentials: true }).pipe(
        map((obj) => obj),
        catchError(e => this.errorHandler(e))
      )
  }

  readMaquininhaById(key: string): Observable<maquininhaCrud> {
    const url =
      // `http://localhost:3001/maquininha/${key}`
      `https://api.gusmfscoder.com.br/maquininha/${key}`
    const headers = this.getHeaders();
    return this.http.get<maquininhaCrud>(url, { headers }).pipe(
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