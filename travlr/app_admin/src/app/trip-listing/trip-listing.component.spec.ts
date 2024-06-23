// app_admin/src/app/trip-listing/trip-listing.component.spec.ts

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripListingComponent } from './trip-listing.component';

describe('TripListingComponent', () => {
  let component: TripListingComponent;
  let fixture: ComponentFixture<TripListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TripListingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
