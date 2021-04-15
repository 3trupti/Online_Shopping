import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { Byte } from '@angular/compiler/src/util';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductInfoModule { 
  Product_Id :number;
  Product_BrandName:string;
  Product_Image:string;
  Product_Description :string;
  Category_Id: string;
  Retailer_ID:number;
  Product_Price:number;
  Product_Ouantity :number;

}


