// app_admin/src/app/trip-listing/trip-listing.component.ts

import { Component, OnInit } from '@angular/core';
import { trips } from '../data/trips';  // Adjust the path as needed

@Component({
  selector: 'app-trip-listing',
  templateUrl: './trip-listing.component.html',
  styleUrls: ['./trip-listing.component.css']
})
export class TripListingComponent implements OnInit {
  trips: Trip[] = [];  // Explicitly type the trips variable

  ngOnInit(): void {
    this.trips = trips;
  }
}

// Define the Trip interface
export interface Trip {
  code: string;
  name: string;
  image: string;
  description: string;
  length: string;
  start: string;
  resort: string;
  perPerson: string;
}
