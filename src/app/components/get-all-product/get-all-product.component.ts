import { Component, OnInit } from '@angular/core';
import{ProductInfoModule} from '../../modules/product-info/product-info.module';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-get-all-product',
  templateUrl: './get-all-product.component.html',
  styleUrls: ['./get-all-product.component.css']
})
export class GetAllProductComponent implements OnInit {
  svc:ProductService;
  prodData:ProductInfoModule[];
  constructor(svc:ProductService) {this.svc=svc; }

  ngOnInit(): void {
    this.svc.GetProductInfo().subscribe((data:ProductInfoModule[])=>{
      this.prodData = data;
      console.log(this.prodData);

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
   


