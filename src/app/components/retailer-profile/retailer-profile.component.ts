import { Component,NgZone, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {FormsModule,NgForm,FormGroup} from '@angular/forms';
import {ProductService} from '../../services/product.service';
import{ProductInfoModule} from '../../modules/product-info/product-info.module';
import{RetailerInfoModule} from '../../modules/retailer-info/retailer-info.module';
import{RetailerService} from '../../services/retailer.service';
import { Byte } from '@angular/compiler/src/util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retailer-profile',
  templateUrl: './retailer-profile.component.html',
  styleUrls: ['./retailer-profile.component.css']
})
export class RetailerProfileComponent implements OnInit {
  model:any=[];
  BrandName:string;
   Image:string;
   Description:string;
   CategoryID:string;
   RetailerID:number;
   Price:number;
   Quantity:number;

   svc: ProductService;
   ngZone:NgZone;
   router:Router;
  prodlist: ProductInfoModule[];
  prod=new ProductInfoModule();

  constructor(svc:ProductService, ngZone:NgZone, router:Router) {
    this.svc=svc;
    this.ngZone = ngZone;
    this.router =  router ;   

   }
   

  ngOnInit(): void {
  }
  





  /*delete(id:number):void{
    this.svc.DeleteRetailor(id).subscribe((data:boolean)=>
    {
      if(data==true)
      {
        alert('deleted successfull');
        location.reload();
      }
      else
      {
        alert('deleted successfull');
      }
    }
    );
  }*/


}