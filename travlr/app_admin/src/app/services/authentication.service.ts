// app_admin/src/app/services/authentication.service.ts

import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BROWSER_STORAGE } from './storage';
import { User } from '../models/user';
import { AuthResponse } from '../models/authresponse';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'https://your-api-url.com/api';

  constructor(
    private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage
  ) {}

  private createAuthorizationHeader(): HttpHeaders {
    const token = this.storage.getItem('travlr-token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  public login(credentials: { email: string; password: string }): Promise<void> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, credentials).toPromise()
      .then(response => {
        if (response && response.token) {
          this.storage.setItem('travlr-token', response.token);
        } else {
          throw new Error('Login failed: No token received');
        }
      });
  }

  public register(user: User): Promise<void> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, user).toPromise()
      .then(response => {
        if (response && response.token) {
          this.storage.setItem('travlr-token', response.token);
        } else {
          throw new Error('Registration failed: No token received');
        }
      });
  }

  public isLoggedIn(): boolean {
    const token = this.storage.getItem('travlr-token');
    return !!token;
  }

  public logout(): void {
    this.storage.removeItem('travlr-token');
  }
}
