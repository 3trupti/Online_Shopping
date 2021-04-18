/*import { Component, OnInit ,NgZone} from '@angular/core';
import {FormsModule,NgForm,FormGroup} from '@angular/forms';
import {UserInfoModule} from 'src/app/modules/user-info/user-info.module';
import {UserInfoService} from 'src/app/services/user-info.service';
import { Router } from '@angular/router';
import {ProductInfoModule} from '../../modules/product-info/product-info.module';*/
import { Component, OnInit,NgZone } from '@angular/core';
import {FormsModule,NgForm,FormGroup} from '@angular/forms';

import {UserInfoModule} from 'src/app/modules/user-info/user-info.module';
import {UserInfoService} from 'src/app/services/user-info.service';
import { Router } from '@angular/router';

/*if(localStorage.getItem("TType")=="Retailer"){}
    else{
      alert("You are Not a Authorized Retailer to view this page")
      this.ngzone.run(()=>this.router.navigateByUrl('/Login'));

    }*/



@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  imageUrl: string="/assets/images/korean.jpg";  //
  fileToupload :File=null; //
  model:any=[];
  //svc:ProductserService;
 // svc1:CategoryserService;
  svc2:UserInfoService;
  ulist:UserInfoModule[];
  prod= new UserInfoModule();
  ngzone: NgZone;
  router: Router;


  constructor(svc2:UserInfoService,ngzone:NgZone, router:Router) {
   
    this.svc2=svc2;
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
  }


// handle function added
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

 
  
AddProducts(AddForm:NgForm):void
{
    
    console.log(AddForm.value);
    this.prod.Product_BrandName=AddForm.value.brand;
    this.prod.Product_Image=AddForm.value.Image;
    this.prod.Product_Description=AddForm.value.desc;
    this.prod.Category_ID=AddForm.value.cat;
    this.prod.Retailer_ID=AddForm.value.id;
    this.prod.Product_Price=AddForm.value.price;
    this.prod.Product_Ouantity=AddForm.value.quan;

    //console.log(this.prod.Product_Image);
    this.svc2.InsertNewProduct(this.prod).subscribe((data:boolean)=> {
      alert(data);
      if(data==true)
      {
        alert('New Product Added');
      }
    });
  }

}