// app_admin/src/app/list-trips/list-trips.component.spec.ts

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListTripsComponent } from './list-trips.component';
import { AuthenticationService } from '../services/authentication.service';
import { of } from 'rxjs';

describe('ListTripsComponent', () => {
  let component: ListTripsComponent;
  let fixture: ComponentFixture<ListTripsComponent>;
  let authenticationServiceSpy: jasmine.SpyObj<AuthenticationService>;

  beforeEach(async () => {
    authenticationServiceSpy = jasmine.createSpyObj('AuthenticationService', ['isLoggedIn']);
    await TestBed.configureTestingModule({
      declarations: [ListTripsComponent],
      providers: [
        { provide: AuthenticationService, useValue: authenticationServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ListTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show add trip button if user is logged in', () => {
    authenticationServiceSpy.isLoggedIn.and.returnValue(true);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button')).toBeTruthy();
  });

  it('should not show add trip button if user is not logged in', () => {
    authenticationServiceSpy.isLoggedIn.and.returnValue(false);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button')).toBeFalsy();
  });
});
