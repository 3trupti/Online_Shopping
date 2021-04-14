import { Component,NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RegisterComponent } from './components/register/register.component';
import{LoginComponent} from  './components/login/login.component';
import{ AdminHomeComponent } from './components/admin-home/admin-home.component'
import{ CustomerHomeComponent } from './components/customer-home/customer-home.component';
import { RetailerHomeComponent } from './components/retailer-home/retailer-home.component';
import {ForgotPasswordComponent} from  './components/forgot-password/forgot-password.component';
import {HeaderComponent} from './core/corecomponents/header/header.component';

 

const routes: Routes= [
 {path:'Home',component:HomePageComponent,pathMatch:"full"},
  {path:'Home',component:HomePageComponent},
  {path:'Register',component:RegisterComponent},
  {path:'Login',component:LoginComponent},
  {path: 'CustomerHome',component:CustomerHomeComponent},
  {path: 'RetailerHome',component:RetailerHomeComponent},
  {path: 'AdminHome',component:AdminHomeComponent},
  {path:'ForgotPassword', component:ForgotPasswordComponent},
  {path:'Header' , component:HeaderComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }