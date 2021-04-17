import { Component,NgZone, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {FormsModule,NgForm,FormGroup} from '@angular/forms';
import {ProductService} from '../../services/product.service';
import{ProductInfoModule} from '../../modules/product-info/product-info.module';
import{Router} from '@angular/router'
import {CategoryInfoModule} from '../../modules/category-info/category-info.module';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-filter-by-brand-name',
  templateUrl: './filter-by-brand-name.component.html',
  styleUrls: ['./filter-by-brand-name.component.css']
})
export class FilterByBrandNameComponent implements OnInit {
  model:any=[];
  bname:string;
  svc: ProductService;
  ngzone:NgZone;
  router:Router;
  prodlist: ProductInfoModule[];
  prod=new ProductInfoModule();
  cat= new CategoryInfoModule();
  id:number;
  cname:string;



  constructor(svc:ProductService,ngzone:NgZone,router:Router) { 
    this.svc =svc;
    this.ngzone=ngzone;
    this.router=router;
  }
  ngOnInit(): void {
  }
  Product(regform:NgForm):void{
   this.prod.Product_BrandName=regform.value.bname;
   this.cname= localStorage.getItem("cname");

  // this.cat.Category_Name = regform.value.cname;
    this.svc.FilterByBrandName(this.prod.Product_BrandName,this.cname).subscribe((data:ProductInfoModule[])=>
          {
            this.prodlist=data;
            console.log(this.prodlist);
                
          });
        }
      }