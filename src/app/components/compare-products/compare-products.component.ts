import { Component,NgZone, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {FormsModule,NgForm,FormGroup} from '@angular/forms';
import {ProductService} from '../../services/product.service';
import{ProductInfoModule} from '../../modules/product-info/product-info.module';
import{Router} from '@angular/router'
import {CategoryInfoModule} from '../../modules/category-info/category-info.module';

@Component({
  selector: 'app-compare-products',
  templateUrl: './compare-products.component.html',
  styleUrls: ['./compare-products.component.css']
})
export class CompareProductsComponent implements OnInit {

 
  
 
    model:any=[];
    cname:string;
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
      localStorage.setItem("reload","false");

    }
    Product(regform:NgForm):void{
     // this.prod.Category_Id=regform.value.id;
     this.cat.Category_Name = regform.value.cname;
      this.svc.Compare(this.cat.Category_Name).subscribe((data:ProductInfoModule[])=>
            {
              this.prodlist=data;
              console.log(this.prodlist);
                  
            });
          }
        }