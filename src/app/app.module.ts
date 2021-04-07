import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ HomePageComponent } from './components/home-page/home-page.component';
import{ RegisterComponent } from './components/register/register.component';
<<<<<<< HEAD
import{HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
=======
import { AddRetailerComponent } from './add-retailer/add-retailer.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';

>>>>>>> eebd7dec21f4887081519e07600eb4181f0b2aa1

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegisterComponent,
    AddRetailerComponent,
    AddProductComponent,
    AdminProfileComponent
   
    
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
