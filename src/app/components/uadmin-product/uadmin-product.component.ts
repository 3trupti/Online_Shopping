import { Component, OnInit } from '@angular/core';
import {FormsModule,NgForm,FormGroup} from '@angular/forms';
import {ProductInfoModule} from '../../modules/product-info/product-info.module';
import {ProductService} from 'src/app/services/product.service';
import {UserInfoService} from '../../services/user-info.service'
import{UserInfoModule} from '../../modules/user-info/user-info.module';

@Component({
  selector: 'app-uadmin-product',
  templateUrl: './uadmin-product.component.html',
  styleUrls: ['./uadmin-product.component.css']
})
export class UAdminProductComponent implements OnInit {

  model:any=[];
  svc2:UserInfoService;
  imageUrl: string="/assets/images/korean.jpg";  //
  fileToupload :File=null; //
  //prod=new ProductInfoModule();
  prod= new UserInfoModule();
  svc:ProductService;
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
  constructor(svc:ProductService,svc2:UserInfoService) { 
    this.svc=svc;
    this.svc2=svc2;
  }

  ngOnInit(): void {
    

    this.model.Product_Id =parseInt(localStorage.getItem("Product_id"));
  this.model.Product_BrandName=localStorage.getItem("Product_BrandName");
  this.model.Product_Image=localStorage.getItem("Product_Image");
  this.model.Product_Description =localStorage.getItem("Product_Description");
  this.model.Category_Id= localStorage.getItem("Category_Id");
  this.model.Retailer_ID=parseInt(localStorage.getItem("Retailer_ID"));
  this.model.Product_Price=parseInt(localStorage.getItem("Product_Price"));
  this.model.Product_Ouantity =parseInt(localStorage.getItem("Product_Ouantity"));

  

  }
  



  

  handleFileInput(file:FileList)
  {
    this.fileToupload=file.item(0);

    // show preview image
    var reader= new FileReader();
    reader.onload=(event:any)=>{
      this.imageUrl=event.target.result;
    }
    reader.readAsText(this.fileToupload);
    console.log(reader);
    
  }

  UpdateProducts(AddForm:NgForm){


    console.log(AddForm.value);
    //this.prod.Product_Id=this.model.Product_Id;
    this.prod.Product_BrandName=this.model.Product_BrandName;
    this.prod.Product_Image = this.model.Product_Image;
    this.prod.Product_Description=this.model.Product_Description;
    this.prod.Category_ID=this.model.Category_Id;
    this.prod.Retailer_ID=this.model.Retailer_ID;
    this.prod.Product_Price=this.model.Product_Price
    this.prod.Product_Ouantity=this.model.Product_Ouantity;

    
   ///

   

  /* this.svc2.ProductAccept(this.model.Product_Id,this.prod).subscribe((data:boolean)=> {
    alert(data);
    if(data==true)
    {
      alert('New Product Added');
    }
  });
}
*/

   ////
    


    this.svc2.AdminAddProduct(this.prod).subscribe((data:boolean)=>
    {
      if(data == true){
        alert( " Approved");
      }

      else{
        alert(" unsucessful Approval");
      }
    });}
    

  

}
