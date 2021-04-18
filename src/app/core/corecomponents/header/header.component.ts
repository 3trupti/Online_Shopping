import { Component, OnInit ,NgZone} from '@angular/core';
import {FormsModule,NgForm,FormGroup} from '@angular/forms';
import{NgModule} from '@angular/core'
import { Router } from '@angular/router';
import { ResourceLoader } from '@angular/compiler';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sess:any;
  ngzone: NgZone;
  router: Router;

  constructor(ngzone:NgZone, router:Router) { 
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
    }


  }

}
