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
import{CoreModule} from './core/core.module';
import{HeaderComponent} from './core/corecomponents/header/header.component';
import{FooterComponent} from './core/corecomponents/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import {ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { RetailerHomeComponent } from './components/retailer-home/retailer-home.component';
import { CustomerHomeComponent } from './components/customer-home/customer-home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AddRetailerComponent,
    AddProductComponent,
    AdminProfileComponent,
    RegisterComponent,
    LoginComponent,
    AdminHomeComponent,
    RetailerHomeComponent,
    CustomerHomeComponent,
    
   
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