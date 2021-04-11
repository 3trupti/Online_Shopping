import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ HomePageComponent } from './components/home-page/home-page.component';
import{ RegisterComponent } from './components/register/register.component';
<<<<<<< HEAD
import {LoginComponent} from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
=======
<<<<<<< HEAD
import{HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
=======
import { AddRetailerComponent } from './add-retailer/add-retailer.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
>>>>>>> f67859cf970e7a125c4bcd95dfbbe6d1e3953575

>>>>>>> eebd7dec21f4887081519e07600eb4181f0b2aa1

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegisterComponent,
<<<<<<< HEAD
    LoginComponent,
    ForgotPasswordComponent
=======
    AddRetailerComponent,
    AddProductComponent,
    AdminProfileComponent
>>>>>>> f67859cf970e7a125c4bcd95dfbbe6d1e3953575
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
