// app_admin/src/app/navbar/navbar.componet.spec.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from '../services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    // other components
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // other modules
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
