// app_admin/src/app/services/trip-data.service.spec.ts

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TripDataService } from './trip-data.service';
import { BROWSER_STORAGE } from './storage';
import { User } from '../models/user';
import { AuthResponse } from '../models/authresponse';

describe('TripDataService', () => {
  let service: TripDataService;
  let httpMock: HttpTestingController;
  let storageMock: jasmine.SpyObj<Storage>;

  beforeEach(() => {
    storageMock = jasmine.createSpyObj('Storage', ['getItem', 'setItem', 'removeItem']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TripDataService,
        { provide: BROWSER_STORAGE, useValue: storageMock }
      ]
    });

    service = TestBed.inject(TripDataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login and set token', async () => {
    const credentials = { email: 'test@test.com', password: 'password' };
    const authResponse: AuthResponse = { token: 'test-token' };

    service.login(credentials).then(() => {
      expect(storageMock.setItem).toHaveBeenCalledWith('travlr-token', authResponse.token);
    });

    const req = httpMock.expectOne('https://your-api-url.com/api/login');
    expect(req.request.method).toBe('POST');
    req.flush(authResponse);
  });

  it('should register and set token', async () => {
    const user: User = { email: 'test@test.com', password: 'password', name: 'Test User' };
    const authResponse: AuthResponse = { token: 'test-token' };

    service.register(user).then(() => {
      expect(storageMock.setItem).toHaveBeenCalledWith('travlr-token', authResponse.token);
    });

    const req = httpMock.expectOne('https://your-api-url.com/api/register');
    expect(req.request.method).toBe('POST');
    req.flush(authResponse);
  });

  // Additional tests can be added here
});
