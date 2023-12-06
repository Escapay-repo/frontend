import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'https://api.gusmfscoder.com.br/tabelas';

  constructor(private http: HttpClient) {}

  register(user: {name: string, email: string, password: string}): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }
}