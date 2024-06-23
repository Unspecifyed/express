import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TripListingComponent } from './trip-listing/trip-listing.component';  // Adjust the path as needed
import { trips } from './data/trips';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TripListingComponent],  // Add TripListingComponent to imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corrected styleUrl to styleUrls
})
export class AppComponent {
  title = 'Francis';
}
