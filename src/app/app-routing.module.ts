import { Component,NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RegisterComponent } from './components/register/register.component';
import{LoginComponent} from  './components/login/login.component';

import { UpdateProductComponent } from './components/update-product/update-product.component';

import{ AdminHomeComponent } from './components/admin-home/admin-home.component'
import{ CustomerHomeComponent } from './components/customer-home/customer-home.component';
import { RetailerHomeComponent } from './components/retailer-home/retailer-home.component';
import {GetProductByRetailerIDComponent} from './components/get-product-by-retailer-id/get-product-by-retailer-id.component';
import{GetProductByCateoryComponent} from './components/get-product-by-cateory/get-product-by-cateory.component';

import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AddRetailerComponent } from './add-retailer/add-retailer.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import {FilterByPriceComponent} from './components/filter-by-price/filter-by-price.component';
import {FilterByBrandNameComponent} from './components/filter-by-brand-name/filter-by-brand-name.component';
import {CartComponent} from './components/cart/cart.component';
import { CompareProductsComponent } from './components/compare-products/compare-products.component';
import {AdminProfileComponent} from './admin-profile/admin-profile.component';
import {ProductAcceptComponent} from './components/product-accept/product-accept.component';
import {UAdminProductComponent} from './components/uadmin-product/uadmin-product.component'


 

const routes: Routes= [
 {path:'Home',component:HomePageComponent,pathMatch:"full"},
  {path:'Home',component:HomePageComponent},
  {path:'Register',component:RegisterComponent},
  {path:'Login',component:LoginComponent},
  {path:'Admin_View' , component:AdminProfileComponent},
  //{path:'UpdateProduct/:ProductID',component:UpdateProductComponent},
  {path:'UpdateP' , component:UpdateProductComponent},
  {path:'ProductAccept',component:ProductAcceptComponent},
  {path:'UAdmin',component:UAdminProductComponent},

  {path: 'CustomerHome',component:CustomerHomeComponent},
  {path: 'RetailerHome',component:RetailerHomeComponent},
  {path: 'AdminHome',component:AdminHomeComponent},
  {path:'Retailer_View',component:GetProductByRetailerIDComponent},
  {path: 'Category',component:GetProductByCateoryComponent},

  {path : 'AddRetailer',component:AddRetailerComponent},
  {path: 'AdminHome',component:AdminHomeComponent},
  {path:  'ForgotPassword', component:ForgotPasswordComponent},
  {path: 'AddProduct',component:AddProductComponent},
  {path: 'Filter_Price',component:FilterByBrandNameComponent},
  {path: 'Filter_Brand',component:FilterByBrandNameComponent},
  {path:'Cart', component:CartComponent},
  {path:'Compare',component:CompareProductsComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }