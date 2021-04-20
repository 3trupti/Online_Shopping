import { Component,NgZone, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {FormsModule,NgForm,FormGroup} from '@angular/forms';
import {ProductService} from '../../services/product.service';
import{ProductInfoModule} from '../../modules/product-info/product-info.module';
import{Router} from '@angular/router'
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler/src/core';
import { UpdateProductComponent } from '../update-product/update-product.component';
import {UserInfoService} from '../../services/user-info.service';

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
  svc1:UserInfoService;
   id:number;
   svc: ProductService;
   ngzone:NgZone;
   router:Router;
   store:string;
  prodlist: ProductInfoModule[];
  prod=new ProductInfoModule();
  Product_Id :number;
  Product_BrandName:string;
  Product_Image:string;
  Product_Description :string;
  Category_Id: string;
  Retailer_ID:number;
  Retailer_Email:string;
  Product_Price:number;
  Product_Ouantity :number;
  bind:string;


  


  constructor(svc:ProductService,ngzone:NgZone,router:Router,svc1:UserInfoService) { 
    this.svc =svc;
    this.ngzone=ngzone;
    this.router=router;
    this.svc1=svc1;
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
          //localStorage.setItem("Product_id",id.toString());
          alert(id);

          this.svc1.DeleteProduct(id).subscribe((data:boolean)=>
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


        Edit(id:number):void{
          this.bind = '../../../assets/images/';

          localStorage.setItem("Product_id",id.toString());
          this.svc.GetProductId(id).subscribe((data:ProductInfoModule)=>
          {
            this.Product_Id=data.Product_Id;
            this.Product_BrandName=data.Product_BrandName;
            this.Product_Description=data.Product_Description;
            this.Product_Ouantity=data.Product_Quantity;
            this.Retailer_ID=data.Retailer_ID;
            this.Category_Id=data.Category_Id;
            this.Product_Image=data.Product_Image;
            this.Product_Price=data.Product_Price;

            console.log(data);
            alert(this.Product_Ouantity);

            localStorage.setItem('Product_BrandName',this.Product_BrandName);
            localStorage.setItem('Product_Description',this.Product_Description);
            localStorage.setItem('Product_Ouantity', this.Product_Ouantity.toString());
            localStorage.setItem('Retailer_ID',this.Retailer_ID.toString());
            localStorage.setItem('Category_Id',this.Category_Id);
            localStorage.setItem('Product_Image',this.Product_Image);
            localStorage.setItem('Product_Price',this.Product_Price.toString());

            this.ngzone.run(()=>this.router.navigateByUrl('/UpdateP'));





          }

          );




        }
      
      }
    

