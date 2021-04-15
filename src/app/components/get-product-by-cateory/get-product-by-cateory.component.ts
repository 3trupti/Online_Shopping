import { Component,NgZone, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {FormsModule,NgForm,FormGroup} from '@angular/forms';
import {ProductService} from '../../services/product.service';
import{ProductInfoModule} from '../../modules/product-info/product-info.module';
import{Router} from '@angular/router'
import {CategoryInfoModule} from '../../modules/category-info/category-info.module';

@Component({
  selector: 'app-get-product-by-cateory',
  templateUrl: './get-product-by-cateory.component.html',
  styleUrls: ['./get-product-by-cateory.component.css']
})
export class GetProductByCateoryComponent implements OnInit {
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
  }
  Product(regform:NgForm):void{
   // this.prod.Category_Id=regform.value.id;
   this.cat.Category_Name = regform.value.cname;
    this.svc.GetProductByCategory(this.cat.Category_Name).subscribe((data:ProductInfoModule[])=>
          {
            this.prodlist=data;
            console.log(this.prodlist);
                
          });
        }
        delete(id:number):void{
          this.svc.DeleteProduct(id).subscribe((data:boolean)=>
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
          });
      
      }
    }

