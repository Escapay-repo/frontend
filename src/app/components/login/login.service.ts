import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, EMPTY, Observable, catchError, map } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

interface User {
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
  private apiUrl = 'http://localhost:3001/users';
  // private apiUrl = 'https://api.gusmfscoder.com.br/users';
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
          this.isAuthenticatedSubject.next(true);
          this.currentUserSubject.next(userResponse);
          console.log('usersubject', this.currentUserSubject)
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
        this.clearToken();
      })
    );
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    const isAuthenticated = !!token;
    this.isAuthenticatedSubject.next(isAuthenticated);
    console.log('autenticado', isAuthenticated)
    return isAuthenticated;
  }

  isAdmin(): boolean {
    const currentUser = this.currentUserSubject.value;
    return currentUser ? currentUser.admin : false;
  }


  getAuthStatus(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  clearToken() {
    localStorage.removeItem('token');
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
}
