// app_admin/src/app/services/authentication.service.spec.ts

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthenticationService } from './authentication.service';
import { BROWSER_STORAGE } from './storage';
import { User } from '../models/user';
import { AuthResponse } from '../models/authresponse';

describe('AuthenticationService', () => {
  let service: AuthenticationService;
  let httpMock: HttpTestingController;
  let storageMock: jasmine.SpyObj<Storage>;

  beforeEach(() => {
    storageMock = jasmine.createSpyObj('Storage', ['getItem', 'setItem', 'removeItem']);
    
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthenticationService,
        { provide: BROWSER_STORAGE, useValue: storageMock }
      ]
    });
    
    service = TestBed.inject(AuthenticationService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login and return an AuthResponse', async () => {
    const user: User = { email: 'test@test.com', name: 'Test User' };
    const authResponse: AuthResponse = { token: 'test-token' };

    service.login(user).then(response => {
      expect(response.token).toBe(authResponse.token);
    });

    const req = httpMock.expectOne('https://your-api-url.com/api/login');
    expect(req.request.method).toBe('POST');
    req.flush(authResponse);
  });

  it('should register and return an AuthResponse', async () => {
    const user: User = { email: 'test@test.com', name: 'Test User' };
    const authResponse: AuthResponse = { token: 'test-token' };

    service.register(user).then(response => {
      expect(response.token).toBe(authResponse.token);
    });

    const req = httpMock.expectOne('https://your-api-url.com/api/register');
    expect(req.request.method).toBe('POST');
    req.flush(authResponse);
  });

  it('should return true if user is logged in', () => {
    storageMock.getItem.and.returnValue('test-token');
    expect(service.isLoggedIn()).toBeTrue();
  });

  it('should return false if user is not logged in', () => {
    storageMock.getItem.and.returnValue(null);
    expect(service.isLoggedIn()).toBeFalse();
  });

  it('should remove token on logout', () => {
    service.logout();
    expect(storageMock.removeItem).toHaveBeenCalledWith('travlr-token');
  });
});
