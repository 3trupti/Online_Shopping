import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ HomePageComponent } from './components/home-page/home-page.component';
import{ RegisterComponent } from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
