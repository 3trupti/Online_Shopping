import { Component, OnInit ,NgZone} from '@angular/core';
import {ProductService} from '../../services/product.service';
import{ProductInfoModule} from '../../modules/product-info/product-info.module';
import{Router} from '@angular/router'
import {CategoryInfoModule} from '../../modules/category-info/category-info.module';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-product-accept',
  templateUrl: './product-accept.component.html',
  styleUrls: ['./product-accept.component.css']
})
export class ProductAcceptComponent implements OnInit {

  svc:UserInfoService;
  prodData:ProductInfoModule[];
  ProdAccept_Id :number;
  Product_BrandName:string;
  Product_Image:string;
  Product_Description :string;
  Category_Id: string;
  Retailer_ID:number;
  Retailer_Email:string;
  Product_Price:number;
  Product_Ouantity :number;
  bind:string;
  ngzone: NgZone;
  router: Router;
  constructor(svc:UserInfoService,ngzone: NgZone,
    router: Router) {
      this.svc=svc; 
      this.ngzone= ngzone;
     this.router= router;
    }

  ngOnInit(): void {

    ///get all products for admin to approve
    this.svc.ProductGet().subscribe((data:ProductInfoModule[])=>{
      this.prodData = data;
      console.log(this.prodData);

    });
  }


  Approve(id:number):void{
    this.bind = '../../../assets/images/';

    localStorage.setItem("ProdAccept_id",id.toString());
    this.svc.ProdAcceptId(id).subscribe((data:ProductInfoModule)=>
    {
      this.ProdAccept_Id =data.Prod;
      this.Product_BrandName=data.Product_BrandName;
      this.Product_Description=data.Product_Description;
      this.Product_Ouantity=data.Product_Quantity;
      this.Retailer_ID=data.Retailer_ID;
      this.Category_Id=data.Category_Id;
      this.Product_Image=data.Product_Image;
      this.Product_Price=data.Product_Price;

      console.log(data);
      

      localStorage.setItem('Product_BrandName',this.Product_BrandName);
      localStorage.setItem('Product_Description',this.Product_Description);
      localStorage.setItem('Product_Ouantity', this.Product_Ouantity.toString());
      localStorage.setItem('Retailer_ID',this.Retailer_ID.toString());
      localStorage.setItem('Category_Id',this.Category_Id);
      localStorage.setItem('Product_Image',this.Product_Image);
      localStorage.setItem('Product_Price',this.Product_Price.toString());

      this.ngzone.run(()=>this.router.navigateByUrl('/UAdmin'));





    }

    );




  }

}




