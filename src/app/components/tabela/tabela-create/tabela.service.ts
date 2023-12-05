import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError, map } from 'rxjs'
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { tabelaCrud } from '../tabelaCrud';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TabelaService {

  baseUrl = "https://api.gusmfscoder.com.br/tabelas"

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient,
    private router: Router
  ) { }

  showMessage(msg: string, isError: boolean = false) {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    })
  }

  create(tabela: tabelaCrud): Observable<tabelaCrud> {
    tabela.key = new Date().getTime().toString();
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<tabelaCrud>(this.baseUrl, tabela, { headers, withCredentials: true }).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<tabelaCrud[]> {
    return this.http.get<tabelaCrud[]>(this.baseUrl, { withCredentials: true }).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  readById(key: string): Observable<tabelaCrud> {
    const url = `${this.baseUrl}/${key}`
    return this.http.get<tabelaCrud>(url, { withCredentials: true }).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }


  readByIdSelector(id: string): Observable<tabelaCrud> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<tabelaCrud>(url, { withCredentials: true });
  }

  update(key: string, data: tabelaCrud): Observable<tabelaCrud> {
    const url = `${this.baseUrl}/update/${key}`
    return this.http.put<tabelaCrud>(url, data).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(id: string): Observable<tabelaCrud> {
    const url = `${this.baseUrl}/delete/${id}`
    return this.http.delete<tabelaCrud>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any> {
    console.log(e)
    this.showMessage('Ocorreu um Erro', true)
    return EMPTY
  }

  getTableById(id: string): Observable<tabelaCrud> {
    return this.readById(id).pipe()
  }

  navigateToDetails(prefix: string, variablePart: string): void {
    this.router.navigate([`${prefix}/${variablePart}`]);
  }

}