import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ HomePageComponent } from './components/home-page/home-page.component';
import {RegisterComponent} from './components/register/register.component';
import{ LoginComponent } from './components/login/login.component';
import{HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AddRetailerComponent } from './add-retailer/add-retailer.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AddRetailerComponent,
    AddProductComponent,
    AdminProfileComponent,
    RegisterComponent,
    LoginComponent,
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }