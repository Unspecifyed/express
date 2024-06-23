// app_admin/src/app/services/authentication.service.ts

import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BROWSER_STORAGE } from './storage';
import { User } from '../models/user';
import { AuthResponse } from '../models/authresponse';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

  public login(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('login', user);
  }

  public register(user: User): Promise<AuthResponse> {
    return this.makeAuthApiCall('register', user);
  }

  private async makeAuthApiCall(urlPath: string, user: User): Promise<AuthResponse> {
    const url: string = `${this.apiUrl}/${urlPath}`;
    const response = await this.http.post<AuthResponse>(url, user).toPromise();
    if (!response) {
      throw new Error(`${urlPath.charAt(0).toUpperCase() + urlPath.slice(1)} failed: no response from server`);
    }
    return response;
  }

  public isLoggedIn(): boolean {
    const token = this.storage.getItem('travlr-token');
    return !!token;
  }

  public logout(): void {
    this.storage.removeItem('travlr-token');
  }
}
