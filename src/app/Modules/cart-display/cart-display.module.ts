import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CartDisplayModule {

  Cart_Details_Id:number;
  Cart_Id :number;
  Product_Id:number;
  Product_Image:string;
  Product_Price:number;
  Product_Quantity:number;
  Total_Order_Amount:number;
 }
