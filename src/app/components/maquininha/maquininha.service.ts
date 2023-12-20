import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError, map } from 'rxjs'
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { maquininhaCrud } from '../tabela/maquininhaCrud';

@Injectable({
  providedIn: 'root'
})
export class MaquininhaService {
  baseUrl = "https://api.gusmfscoder.com.br/maquininha";
  // baseUrl = 'http://localhost:3001/maquininha';

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient,
    private router: Router
  ) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token || ''
    });
  }

  showMessage(msg: string, isError: boolean = false) {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
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

  read(): Observable<maquininhaCrud[]> {
    const headers = this.getHeaders();
    return this.http.get<maquininhaCrud[]>(this.baseUrl, { headers, withCredentials: true }).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  createMaquininha(tabela: maquininhaCrud): Observable<maquininhaCrud> {
    tabela.key = new Date().getTime().toString();
    const headers = this.getHeaders();
    return this.http.post<maquininhaCrud>(this.baseUrl, tabela, { headers }).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  readById(key: string): Observable<maquininhaCrud> {
    const url = `${this.baseUrl}/${key}`
    const headers = this.getHeaders();
    return this.http.get<maquininhaCrud>(url, { headers }).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }


  readByIdSelector(id: string): Observable<maquininhaCrud> {
    const url = `${this.baseUrl}/${id}`
    const headers = this.getHeaders();
    return this.http.get<maquininhaCrud>(url, { headers, withCredentials: true });
  }

  update(key: string, data: maquininhaCrud): Observable<maquininhaCrud> {
    const url = `${this.baseUrl}/update/${key}`
    const headers = this.getHeaders();
    return this.http.put<maquininhaCrud>(url, data, { headers }).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(id: string): Observable<maquininhaCrud> {
    const url = `${this.baseUrl}/delete/${id}`
    const headers = this.getHeaders();
    return this.http.delete<maquininhaCrud>(url, { headers }).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  getTableById(id: string): Observable<maquininhaCrud> {
    return this.readById(id).pipe()
  }

  navigateToDetails(prefix: string, variablePart: string): void {
    this.router.navigate([`${prefix}/${variablePart}`]);
  }
}
