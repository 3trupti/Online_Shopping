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
  localCategory:string;
  newid:Number;
  cartemail:string;
  cartprodid:number;
  cartID :string;



  constructor(svc:ProductService,ngzone:NgZone,router:Router) { 
    this.svc =svc;
    this.ngzone=ngzone;
    this.router=router;
  }
  ngOnInit(): void {

    
    this.localCategory=localStorage.getItem("cname");
    this.svc.GetProductByCategory(this.localCategory).subscribe((data:ProductInfoModule[])=>
          {
            this.prodlist=data;
            console.log(this.prodlist);
                
          });
        }

////Filter By Brand Name
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

///////////Filter by price





///filter functiins
/*Brand():void{

  alert("clicked")
  this.ngzone.run(()=>this.router.navigateByUrl('/Filter_Brand'));



}
Price():void{
  this.ngzone.run(()=>this.router.navigateByUrl('/Filter_Price'));




}
*/







//Add to cart function
 AddToCart(id:number):void{
    this.cartprodid=id;
    this.cartemail=localStorage.getItem("Email");

    
    if(localStorage.getItem("TType")=="Customer")
    {

      localStorage.setItem("Product_id",this.cartprodid.toString()); 
      this.svc.AddToCart(this.cartprodid,this.cartemail).subscribe((data:string)=>
      {
        //data is nothing by cart Id of customer storing in local storage to access for displaying cart details

        localStorage.setItem("Cart_Id",data);

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
  /*Product(regform:NgForm):void{
   // this.prod.Category_Id=regform.value.id;
   //this.cat.Category_Name = regform.value.cname;
   this.localCategory=localStorage.getItem("cname");
    this.svc.GetProductByCategory(this.localCategory).subscribe((data:ProductInfoModule[])=>
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
          });*/
      
      
    

