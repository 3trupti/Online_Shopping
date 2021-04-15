import { Component, OnInit } from '@angular/core';
import {FormsModule,NgForm,FormGroup} from '@angular/forms';
import {ProductInfoModule} from '../../app/modules/product-info/product-info.module';
import {ProductService} from 'src/app/services/product.service';
import {CategoryInfoModule} from 'src/app/modules/category-info/category-info.module';
import {CategoryService} from 'src/app/services/category.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  model:any=[];
  svc:ProductService;
  svc1:CategoryService;
  clist:CategoryInfoModule[];
  
  prod= new ProductInfoModule();
  
  constructor(svc:ProductService,svc1:CategoryService) {
    this.svc=svc;
    this.svc1=svc1;
   }

   ngOnInit(): void {

    /*this.svc1.GetCategoryInfo().subscribe((data:CategoryInfoModule[])=>
    {
      this.clist=data;
    });*/


}
AddProducts(AddForm:NgForm):void
{
  console.log(AddForm.value);
    this.prod.Product_BrandName= AddForm.value.brand;
    this.prod.Product_Image=AddForm.value.img;
    this.prod.Product_Description=AddForm.value.desc;
    this.prod.Category_Id=AddForm.value.cat;
    this.prod.Retailer_ID=AddForm.value.id;
    this.prod.Product_Price=AddForm.value.price;
    this.prod.Product_Ouantity=AddForm.value.quan;

   /* this.svc.InsertNewProduct(this.prod).subscribe((data:boolean)=> {
      alert(data);
      if(data==true)
      {
        alert('New Product Added');
      }
    });*/
  }

}




 


  
  
