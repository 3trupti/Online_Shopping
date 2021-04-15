import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RetailerInfoModule { 
  Retailer_ID:number;
    Retailer_Name:string;
    Retailer_ContactNo:string;
    Retailer_Address:string;
    Retailer_Country:string;
    Retailer_State :string;
    Retailer_City:string;
    Retailer_PostalCode:number;
    Retailer_Email: string
    Retailer_Password:string;
}
