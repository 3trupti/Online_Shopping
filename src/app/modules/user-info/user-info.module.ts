import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UserInfoModule { 
  
  Customer_ID :string;
  Customer_Name :string;
  Customer_ContactNo :string;
  Customer_Address :string;
  Customer_Country :string;
  Customer_State:string;
  Customer_City :string;
  Customer_PostalCode:string;
  Customer_Email :string;
  Customer_Password :string;
  Customer_Type :string;


  Retailer_ID :string;
  Retailer_Name: string;
  Retailer_ContactNo : string;
  Retailer_Address : string;
  Retailer_Country : string;
  Retailer_State : string;
  Retailer_City : string;
  Retailer_PostalCode : string;
  Retailer_Email : string;
  Retailer_Password : string;
}
