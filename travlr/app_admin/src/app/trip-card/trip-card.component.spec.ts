// app_admin/src/app/trip-card/trip-card.component.spec.ts

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TripCardComponent } from './trip-card.component';
import { AuthenticationService } from '../services/authentication.service';
import { of } from 'rxjs';

describe('TripCardComponent', () => {
  let component: TripCardComponent;
  let fixture: ComponentFixture<TripCardComponent>;
  let authenticationServiceSpy: jasmine.SpyObj<AuthenticationService>;

  beforeEach(async () => {
    authenticationServiceSpy = jasmine.createSpyObj('AuthenticationService', ['isLoggedIn']);
    await TestBed.configureTestingModule({
      declarations: [TripCardComponent],
      providers: [
        { provide: AuthenticationService, useValue: authenticationServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TripCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show edit button if user is logged in', () => {
    authenticationServiceSpy.isLoggedIn.and.returnValue(true);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button')).toBeTruthy();
  });

  it('should not show edit button if user is not logged in', () => {
    authenticationServiceSpy.isLoggedIn.and.returnValue(false);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button')).toBeFalsy();
  });
});
