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
import { AddProductComponent } from './components/add-product/add-product.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import{CoreModule} from './core/core.module';
import{HeaderComponent} from './core/corecomponents/header/header.component';
import{FooterComponent} from './core/corecomponents/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import {ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { RetailerProfileComponent } from './components/retailer-profile/retailer-profile.component';
import { GetAllProductComponent } from './components/get-all-product/get-all-product.component';
import { GetProductByRetailerIDComponent } from './components/get-product-by-retailer-id/get-product-by-retailer-id.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { RetailerHomeComponent } from './components/retailer-home/retailer-home.component';
import { CustomerHomeComponent } from './components/customer-home/customer-home.component';
import { GetProductByCateoryComponent } from './components/get-product-by-cateory/get-product-by-cateory.component';
import { FilterByBrandNameComponent } from './components/filter-by-brand-name/filter-by-brand-name.component';
import { FilterByPriceComponent } from './components/filter-by-price/filter-by-price.component';
<<<<<<< HEAD
import { CompareProductsComponent } from './components/compare-products/compare-products.component';
=======
import { OrderDetailsComponent } from './components/order-details/order-details.component';
>>>>>>> 834545385fa2c83e8068ad40c90a8c32e9c0778c



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AddRetailerComponent,
    AddProductComponent,
    AdminProfileComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    ForgotPasswordComponent,
    FooterComponent,
    CartComponent,
    HeaderComponent,
    RetailerProfileComponent,
    GetAllProductComponent,
    GetProductByRetailerIDComponent,
    UpdateProductComponent,
    AdminProfileComponent,
    AdminHomeComponent,
    RetailerHomeComponent,
    CustomerHomeComponent,
    ForgotPasswordComponent,
    FooterComponent,
    CartComponent,
   
    HeaderComponent,
   
    GetProductByCateoryComponent,
   
    FilterByBrandNameComponent,
   
    FilterByPriceComponent,
    CustomerHomeComponent,
<<<<<<< HEAD
    CompareProductsComponent
=======
    OrderDetailsComponent
>>>>>>> 834545385fa2c83e8068ad40c90a8c32e9c0778c

    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    CoreModule,

    
    

    

   


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }