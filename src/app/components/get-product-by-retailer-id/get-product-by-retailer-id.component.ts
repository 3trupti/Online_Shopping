import { Component,NgZone, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {FormsModule,NgForm,FormGroup} from '@angular/forms';
import {ProductService} from '../../services/product.service';
import{ProductInfoModule} from '../../modules/product-info/product-info.module';
import{Router} from '@angular/router'

@Component({
  selector: 'app-get-product-by-retailer-id',
  templateUrl: './get-product-by-retailer-id.component.html',
  styleUrls: ['./get-product-by-retailer-id.component.css']
})
export class GetProductByRetailerIDComponent implements OnInit {
  model:any=[];
  /*BrandName:string;
   Image:string;
   Description:string;
   CategoryID:string;
   RetailerID:number;
   Price:number;
   Quantity:number;*/
  
   id:number;
   svc: ProductService;
   ngzone:NgZone;
   router:Router;
   store:string;
  prodlist: ProductInfoModule[];
  prod=new ProductInfoModule();
  


  constructor(svc:ProductService,ngzone:NgZone,router:Router) { 
    this.svc =svc;
    this.ngzone=ngzone;
    this.router=router;
  }

  ngOnInit(): void {
   
    localStorage.setItem("reload","false");

    if(localStorage.getItem("TType")=="Retailer"){}
    else{
      alert("You are Not a Authorized Retailer to view this page")
      this.ngzone.run(()=>this.router.navigateByUrl('/Login'));

    }
    /*this.svc.GetProductById(this.prod.Retailer_ID).subscribe(data:ProductInfoModule)=>
    {
      this.prodlist=data;
      console.log(this.prodlist);
    }*/
  }
  AddProduct():void{
    this.ngzone.run(()=>this.router.navigateByUrl('/AddProduct'));

  }

 Product(regform:NgForm):void{
   // this.prod.Retailer_Email=regform.value.email;
    this.store=localStorage.getItem('Email')
    this.svc.GetProductById(this.store).subscribe((data:ProductInfoModule[])=>
          {
            
            this.prodlist=data;
            

            console.log(this.prodlist);
          
           /*this.BrandName= data.Product_BrandName;
            this.Image= data.Product_Image;
            this.Description= data.Product_Description;
            this.CategoryID = data.Category_Id;
            this.RetailerID = data.Retailer_ID;
            this.Price= data.Product_Price;
            this.Quantity = data.Product_Ouantity;
            
  
            console.log(data.Product_BrandName+ "," + data.Product_Image + "," + data.Product_Description + "," + data.Category_Id +
             "," + data.Retailer_ID+ "," + data.Product_Price+","+data.Product_Ouantity );*/
            
            
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

