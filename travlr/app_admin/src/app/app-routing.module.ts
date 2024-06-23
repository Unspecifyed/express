// app_admin/src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'list-trips', component: TripListingComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/list-trips', pathMatch: 'full' },
  { path: '**', redirectTo: '/list-trips' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
