import { Component,NgZone, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {FormsModule,NgForm,FormGroup} from '@angular/forms';
import {ProductService} from '../../services/product.service';
import{ProductInfoModule} from '../../modules/product-info/product-info.module';
import{Router} from '@angular/router'
import {CategoryInfoModule} from '../../modules/category-info/category-info.module';

@Component({
  selector: 'app-filter-by-price',
  templateUrl: './filter-by-price.component.html',
  styleUrls: ['./filter-by-price.component.css']
})
export class FilterByPriceComponent implements OnInit {
  model:any=[];
  bname:number;
  svc: ProductService;
  ngzone:NgZone;
  router:Router;
  prodlist: ProductInfoModule[];
  prod=new ProductInfoModule();
  cat= new CategoryInfoModule();
  id:number;


  constructor(svc:ProductService,ngzone:NgZone,router:Router) { 
    this.svc =svc;
    this.ngzone=ngzone;
    this.router=router;
  }
  ngOnInit(): void {
  }
  Product(regform:NgForm):void{
   this.prod.Product_Price=regform.value.bname;
  // this.cat.Category_Name = regform.value.cname;
    this.svc.FilterByPrice(this.prod.Product_Price).subscribe((data:ProductInfoModule[])=>
          {
            this.prodlist=data;
            console.log(this.prodlist);
                
          });
        }
      }