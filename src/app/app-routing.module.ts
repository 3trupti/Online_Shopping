import { Component,NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RegisterComponent } from './components/register/register.component';
import{LoginComponent} from  './components/login/login.component';
<<<<<<< HEAD
import { AdminProfileComponent} from './admin-profile/admin-profile.component';
=======
import{ AdminHomeComponent } from './components/admin-home/admin-home.component'
import{ CustomerHomeComponent } from './components/customer-home/customer-home.component';
import { RetailerHomeComponent } from './components/retailer-home/retailer-home.component';
>>>>>>> aa8d7294bf177e62b3bf0789259aad07b8f19353
 

const routes: Routes= [
 {path:'Home',component:HomePageComponent,pathMatch:"full"},
  {path:'Home',component:HomePageComponent},
  {path:'Register',component:RegisterComponent},
  {path:'Login',component:LoginComponent},
<<<<<<< HEAD
  {path:'AdminHome',component:AdminProfileComponent}
=======
  {path: 'CustomerHome',component:CustomerHomeComponent},
  {path: 'RetailerHome',component:RetailerHomeComponent},
  {path: 'AdminHome',component:AdminHomeComponent}
>>>>>>> aa8d7294bf177e62b3bf0789259aad07b8f19353



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }