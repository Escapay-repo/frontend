import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, EMPTY, Observable, catchError, map, of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

export interface User {
  _id?: string;
  name: string;
  email: string;
  password: string;
  admin: boolean;
  token: string;
  active?: boolean;
  lastLogin?: Date;
}

interface LoginResponse {
  user: {
    _id?: string;
    name: string;
    email: string;
    admin: boolean;
    password: string;
    active?: boolean;
    lastLogin?: Date;
  };
  token: string;
  admin: boolean;
  active?: boolean;
  dateLogin?: Date;
}

export interface UserData {
  user: {
    _id?: string;
    name: string;
    email: string;
    admin: boolean;
    active?: boolean;
  };
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // private apiUrl = 'http://localhost:3001/users';
  private apiUrl = 'https://api.escapaybank-integracoes.com.br/users';
  private token: string = '';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  private isAdminSubject = new BehaviorSubject<boolean>(false);

  constructor(private snackBar: MatSnackBar,
    private http: HttpClient,
    private router: Router,
  ) { }

  register(user: User): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`${this.apiUrl}/register`, user, { headers, withCredentials: true }).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  login(credentials: { email: string, password: string }): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, credentials, { withCredentials: true }).pipe(
      map((response) => {
        if (response.token) {
          const user: User = {
            _id: response.user._id,
            name: response.user.name,
            email: response.user.email,
            password: response.user.password,
            token: response.token,
            admin: response.admin,
            active: response.active,
            lastLogin: response.user.lastLogin,
          };

          const userData: UserData = {
            user: {
              _id: user._id,
              name: user.name,
              email: user.email,
              admin: user.admin,
              active: user.active,
            }
          };

          this.token = user.token;
          localStorage.setItem('token', this.token);
          localStorage.setItem('isAdmin', user.admin.toString());
          localStorage.setItem('userDetails', JSON.stringify(userData));
          this.isAuthenticatedSubject.next(true);
          this.currentUserSubject.next(user);
          this.isAdminSubject.next(user.admin);
        }
        return response;
      }),
      catchError(e => this.errorHandler(e))
    );
  }

  getUser(): Observable<User | null> {
    return this.currentUserSubject.asObservable();
  }

  changePassword(passwordData: { currentPassword: string, newPassword: string }): Observable<any> {
    const headers = this.getHeaders();
    return this.http.post(`${this.apiUrl}/changePassword`, passwordData, { headers, withCredentials: true });
  }

  changeEmail(emailData: { currentEmail: string, newEmail: string }) {
    const headers = this.getHeaders();
    return this.http.post<any>(`${this.apiUrl}/changeEmail`, emailData, { headers, withCredentials: true });
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
    const storedIsAdmin = localStorage.getItem('isAdmin') === 'true';
    return this.getUser().pipe(
      map(user => {
        if (user) {
          return user.admin || storedIsAdmin;
        }
        return storedIsAdmin;
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

  get isAdminStatus(): Observable<boolean> {
    return this.isAdminSubject.asObservable();
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
      console.log(error)
      if (error.status === 401 && error.error && error.error.error === 'Token inválido.') {
        this.clearToken();  // Limpa o token inválido
        this.router.navigate(['/login']);  // Redireciona para a página de login
        this.showMessage('Sua sessão expirou ou as credenciais são inválidas. Por favor, faça login novamente.', true);
      } else if (error.status === 400 && error.error && error.error.error === 'Email já  está  em uso.') {
        this.showMessage('Email já  está  em uso.', true);
      } else if (error.status === 401 && error.error && error.error.error) {
        this.showMessage('Credenciais incorretas', true);
      } else {
        this.showMessage('Ocorreu um Erro', true);
      }
    }
    return EMPTY;
  }

  getToken(): string {
    return this.token;
  }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token || ''
    });
  }

  fetchUserDetails(userId: string): Observable<User | null> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    });

    return this.http.get<User>(`${this.apiUrl}/users/${userId}`, { headers, withCredentials: true }).pipe(
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

  getActiveStatus(): boolean | null {
    const userDetails = localStorage.getItem('userDetails');
    console.log('userDetails from localStorage:', userDetails);

    if (userDetails) {
      const userData: UserData = JSON.parse(userDetails);
      const activeStatus = userData?.user?.active;
      console.log('activeStatus from user details:', activeStatus);
      return activeStatus ?? null;
    }

    return null;
  }
}