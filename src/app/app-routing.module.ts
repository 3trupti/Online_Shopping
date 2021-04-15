import { Component,NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RegisterComponent } from './components/register/register.component';
import{LoginComponent} from  './components/login/login.component';

import { UpdateProductComponent } from './components/update-product/update-product.component';

import{ AdminHomeComponent } from './components/admin-home/admin-home.component'
import{ CustomerHomeComponent } from './components/customer-home/customer-home.component';
import { RetailerHomeComponent } from './components/retailer-home/retailer-home.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AddRetailerComponent } from './add-retailer/add-retailer.component';
import { AddProductComponent } from './components/add-product/add-product.component';
 

const routes: Routes= [
 {path:'Home',component:HomePageComponent,pathMatch:"full"},
  {path:'Home',component:HomePageComponent},
  {path:'Register',component:RegisterComponent},
  {path:'Login',component:LoginComponent},

  {path:'UpdateProduct/:ProductID',component:UpdateProductComponent},

  {path: 'CustomerHome',component:CustomerHomeComponent},
  {path: 'RetailerHome',component:RetailerHomeComponent},
  {path : 'AddRetailer',component:AddRetailerComponent},
  {path: 'AdminHome',component:AdminHomeComponent},
  {path:  'ForgotPassword', component:ForgotPasswordComponent},
  {path: 'AddProduct',component:AddProductComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }