import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, EMPTY, Observable, catchError, map, of, tap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface User {
  name: string;
  email: string;
  password: string;
  admin: boolean;
  token: string;
}



@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // private apiUrl = 'http://localhost:3001/users';
  private apiUrl = 'https://api.gusmfscoder.com.br/users';
  private token: string = '';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private currentUserSubject = new BehaviorSubject<User | null>(null);

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient,
  ) { }

  register(user: User): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.apiUrl}/register`, user, { headers, withCredentials: true }).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  login(credentials: { email: string, password: string }): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/login`, credentials, { withCredentials: true }).pipe(
      map((userResponse) => {
        if (userResponse.token) {
          this.token = userResponse.token;
          localStorage.setItem('token', this.token);
          localStorage.setItem('isAdmin', userResponse.admin.toString());
          this.isAuthenticatedSubject.next(true);
          this.currentUserSubject.next(userResponse);
        }
        return userResponse;
      }),
      catchError(e => this.errorHandler(e))
    );
  }
  getUser(): Observable<User | null> {
    return this.currentUserSubject.asObservable();
  }

  logout() {
    return this.http.post(`${this.apiUrl}/logout`, {}).pipe(
      map(() => {
        localStorage.removeItem('token');  // Remover o token do localStorage
        this.isAuthenticatedSubject.next(false);  // Definir o status de autenticação como falso
      }),
      catchError(e => this.errorHandler(e))
    );
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    const isAuthenticated = !!token;
    this.isAuthenticatedSubject.next(isAuthenticated);
    return isAuthenticated;
  }

  isAdmin(): Observable<boolean> {
    return this.getUser().pipe(
      map(user => {
        if (user) {
          return user.admin || localStorage.getItem('isAdmin') === 'true';
        }
        return false;
      }),
      catchError(err => {
        console.error('Error fetching user details:', err);
        return of(false);
      })
    );
  }

  getAuthStatus(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  clearToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('isAdmin');
    this.isAuthenticatedSubject.next(false);
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
      if (error.status === 400 && error.error && error.error.error === 'Email já  está  em uso.') {
        this.showMessage('Email já  está  em uso.', true);
      } else {
        this.showMessage('Ocorreu um Erro', true);
      }
    }
    return EMPTY;
  }

  getToken(): string {
    return this.token;
  }

  getUserDetails(): Observable<User | null> {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error('Token not found');
      return of(null);
    }

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    });

    return this.http.get<User>(`${this.apiUrl}/me`, { headers, withCredentials: true }).pipe(
      map(user => {
        this.currentUserSubject.next(user);
        return user;
      }),
      catchError(e => {
        console.error('Erro ao obter detalhes do usuário:', e);
        return of(null);
      })
    );
  }
}
