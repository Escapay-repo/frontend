import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError, map, tap } from 'rxjs'
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { tabelaCrud } from '../tabelaCrud';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TabelaService {

  baseUrl = "http://localhost:3001/tabelas"

  constructor(private snackBar: MatSnackBar, 
    private http: HttpClient,
    private route: ActivatedRoute) { }

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
    return this.http.post<tabelaCrud>(this.baseUrl, tabela).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  read(): Observable<tabelaCrud[]> {
    return this.http.get<tabelaCrud[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  readById(id: string): Observable<tabelaCrud> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<tabelaCrud>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }


  readByIdSelector(id: string): Observable<tabelaCrud> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<tabelaCrud>(url);
  }

  update(tabela: tabelaCrud): Observable<tabelaCrud> {
    const url = `${this.baseUrl}/${tabela.id}`
    return this.http.put<tabelaCrud>(url, tabela).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    )
  }

  delete(id: number): Observable<tabelaCrud> {
    const url = `${this.baseUrl}/${id}`
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
}
