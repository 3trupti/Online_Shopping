import { Component,NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RegisterComponent } from './components/register/register.component';
import{LoginComponent} from  './components/login/login.component';
import { AdminProfileComponent} from './admin-profile/admin-profile.component';
 

const routes: Routes= [
 {path:'Home',component:HomePageComponent,pathMatch:"full"},
  {path:'Home',component:HomePageComponent},
  {path:'Register',component:RegisterComponent},
  {path:'Login',component:LoginComponent},
  {path:'AdminHome',component:AdminProfileComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }