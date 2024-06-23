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
export class TripDataService {
  private apiUrl = 'https://your-api-url.com/api';

  constructor(
    private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage
  ) {}

  private createAuthorizationHeader(): HttpHeaders {
    const token = this.storage.getItem('travlr-token');
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  public async login(user: User): Promise<AuthResponse> {
    const response = await this.http.post<AuthResponse>(`${this.apiUrl}/login`, user).toPromise();
    if (!response) {
      throw new Error('Login failed: no response from server');
    }
    return response;
  }

  public async register(user: User): Promise<AuthResponse> {
    const response = await this.http.post<AuthResponse>(`${this.apiUrl}/register`, user).toPromise();
    if (!response) {
      throw new Error('Registration failed: no response from server');
    }
    return response;
  }

  // Example of an authenticated API call
  public getTrips(): Observable<any> {
    const headers = this.createAuthorizationHeader();
    return this.http.get(`${this.apiUrl}/trips`, { headers }).pipe(
      map(response => response)
    );
  }
}
