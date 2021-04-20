import { Component, OnInit } from '@angular/core';
import {FormsModule,NgForm,FormGroup} from '@angular/forms';
import {ProductInfoModule} from '../../modules/product-info/product-info.module';
import {ProductService} from 'src/app/services/product.service';
import{ActivatedRoute} from '@angular/router';
import {AdminInfoModuleModule} from '../../modules/admin-info-module/admin-info-module.module';
import {AdminInfoServiceService} from '../../services/admin-info-service.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  model:any=[];
  svc1:AdminInfoServiceService;
  imageUrl: string="/assets/images/korean.jpg";  //
  fileToupload :File=null; //
  prod=new ProductInfoModule();
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
  rlist:AdminInfoModuleModule[];
  constructor(svc:ProductService,svc1:AdminInfoServiceService) { 
    this.svc=svc;
    this.svc1=svc1;
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

  this.svc1.GetRetailors().subscribe((data:AdminInfoModuleModule[])=>{
    this.rlist=data;

  }
  );



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
    this.prod.Product_Id=this.model.Product_Id;
    this.prod.Product_BrandName=this.model.Product_BrandName;
    this.prod.Product_Image = this.model.Product_Image;
    this.prod.Product_Description=this.model.Product_Description;
    this.prod.Category_Id=this.model.Category_Id;
    this.prod.Retailer_ID=this.model.Retailer_ID;
    this.prod.Product_Price=this.model.Product_Price
    this.prod.Product_Ouantity=this.model.Product_Ouantity;

    

    


    this.svc.UpdateProduct(this.model.Product_Id,this.prod).subscribe((data:boolean)=>
    {
      if(data == true){
        alert("update sucessful");
      }

      else{
        alert("not unsucessful");
      }
    });}
    

  

}
