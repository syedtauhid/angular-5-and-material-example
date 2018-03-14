import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routing';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { AuthService, EmployeeService } from './_services/index';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminpanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
