import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import{ HomePageComponent } from './components/home-page/home-page.component'
=======
import { RegisterComponent } from './Components/register/register.component';
>>>>>>> 64a6eddd14d45b1d3d2c6ea8b84d308217a67b90


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HomePageComponent
=======
    RegisterComponent
>>>>>>> 64a6eddd14d45b1d3d2c6ea8b84d308217a67b90
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
