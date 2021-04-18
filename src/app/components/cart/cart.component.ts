import { Component, OnInit } from '@angular/core';
import { CategoryInfoModule } from 'src/app/modules/category-info/category-info.module';
import {CartDisplayModule} from '../../modules/cart-display/cart-display.module';
import {CartServiceService} from '../../services/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  model:any[]
  svc:CartServiceService;
  Cart=new CartDisplayModule();
  Cart_Id:number;
  cartdetails:CartDisplayModule[];
  carttotal:number;
  id:number;


  constructor(svc:CartServiceService) {this.svc = svc ;}

  ngOnInit(): void {
    localStorage.setItem("reload","false");
    this.Cart_Id=parseInt(localStorage.getItem("Cart_Id"));///converted cart id from string to int


    this.svc.GetCartDetails(this.Cart_Id).subscribe((data:CartDisplayModule[])=>
    { 
      this.carttotal=0;
      this.cartdetails=data;
      this.cartdetails.forEach(item=>{
        this.carttotal+=(item.Product_Price*item.Product_Quantity)
      })

      console.log(data);

    }
    );}

    delete(id:number):void{
      this.svc.DeleteCart_Item(id).subscribe((data:boolean)=>
      {
        if(data==true)
        {
        alert('Product Deleted Successfully');
         location.reload();
      }
      else
      {
        alert('Unable to Delete');
      }
      });}

      NetBanking():void
      {
        localStorage.setItem("PayMode","NetBanking");

      }

      COD():void{
        localStorage.setItem("PayMode","COD");


      }






}


