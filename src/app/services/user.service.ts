import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private apiUrl = 'http://localhost:3001/users';
  private apiUrl = 'https://api.escapaybank-integracoes.com.br/users';


  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    const headers = this.getHeaders();
    return this.http.get<any[]>(`${this.apiUrl}/all`, { headers, withCredentials: true }).pipe(
      map(data => data),
      catchError(error => this.handleError(error))
    );
  }

  deleteUser(userId: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.delete(`${this.apiUrl}/delete/${userId}`, { headers, withCredentials: true }).pipe(
      catchError(error => this.handleError(error))
    );
  }

  deactivateUser(userId: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.put(`${this.apiUrl}/deactivate/${userId}`, {}, { headers, withCredentials: true }).pipe(
      catchError(error => this.handleError(error))
    );
  }

  toggleUserStatus(userId: string, newStatus: boolean): Observable<any> {
    const headers = this.getHeaders();
    return this.http.put(`${this.apiUrl}/toggleStatus/${userId}`, { active: newStatus }, { headers, withCredentials: true }).pipe(
      catchError(error => this.handleError(error))
    );
  }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token || ''
    });
  }

  private handleError(error: any): Observable<any> {
    console.error('Erro na requisição:', error);
    return throwError(() => error);
  }
}