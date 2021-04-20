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
    cartprodid:number;
    cartemail:string;
    


    
  
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


          AddToCart(id: number): void {
            this.cartprodid = id;
            this.cartemail = localStorage.getItem("Email");
        
            
            if(localStorage.getItem("TType")=="Customer")
            {
        
              localStorage.setItem("Product_id",this.cartprodid.toString()); 
              this.svc.AddToCart(this.cartprodid,this.cartemail).subscribe((data:string)=>
              {
                //data is nothing by cart Id of customer storing in local storage to access for displaying cart details
        
                localStorage.setItem("Cart_Id",data);
                alert("Item Added to Cart")
        
                console.log(data);
                location.reload();
        
                
        
              });
              
            }
            else
            {
               alert("Please login to add to cart")
              this.ngzone.run(()=>this.router.navigateByUrl('/Login'));
            }
        }




        }