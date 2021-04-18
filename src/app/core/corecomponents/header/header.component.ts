import { Component, OnInit ,NgZone} from '@angular/core';
import {FormsModule,NgForm,FormGroup} from '@angular/forms';
import{NgModule} from '@angular/core'
import { Router } from '@angular/router';
import { ResourceLoader } from '@angular/compiler';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';
import {UserInfoService} from '../../../services/user-info.service';
import {CartDisplayModule} from '../../../modules/cart-display/cart-display.module';
import {CartServiceService} from '../../../services/cart-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sess:any;
  ngzone: NgZone;
  router: Router;
  
  CartEmail:string;
  svc:UserInfoService;
  svc1:CartServiceService;

  constructor(ngzone:NgZone, router:Router,svc:UserInfoService,svc1:CartServiceService) { 
    this.svc=svc;
    this.svc1=svc1;
    ngzone: ngzone;
  router: router;
  }

  ngOnInit(): void {
    
   // alert(this.sess);
  }

  /*Logout():void{
    {
      this.sess=localStorage.getItem("sess");
      if(this.sess=="true"){

       this.sess="false";}
     }
    
  }*/

  Mobile():void{
    localStorage.setItem("cname","Electronics-Mobile");
   if(localStorage.getItem("reload")=="false"){
      localStorage.setItem("reload","true");

    }
    else{ 

      location.reload();
    }



  }
  Laptop():void{
    localStorage.setItem("cname","Electronics-Laptops");
    if(localStorage.getItem("reload")=="false"){
      localStorage.setItem("reload","true");

    }
    else{ 

      location.reload();
    }




  }
  TV():void{
    localStorage.setItem("cname","Electronics-TV");
    if(localStorage.getItem("reload")=="false"){
      localStorage.setItem("reload","true");

    }
    else{ 

      location.reload();
    }


  }

  Men():void{
    localStorage.setItem("cname","Mens-Fashion");
    if(localStorage.getItem("reload")=="false"){
      localStorage.setItem("reload","true");

    }
    else{ 

      location.reload();
    }





  }
  Women():void{
    localStorage.setItem("cname","Womens-Fashion");
    if(localStorage.getItem("reload")=="false"){
      localStorage.setItem("reload","true");

    }
    else{ 

      location.reload();
    }}


    


    GetCartID():void{
      this.CartEmail=localStorage.getItem("Email");

      this.svc.GetCartID(this.CartEmail).subscribe((data1:number)=>{
        console.log(data1);

        localStorage.setItem("Cart_Id",data1.toString());
        location.reload();



        
      })}
    }



    
    


  


      
    
  
  


  


