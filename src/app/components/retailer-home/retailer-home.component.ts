import { Component, OnInit,NgZone } from '@angular/core';
import { Router } from '@angular/router';
//import { type } from 'node:os';

@Component({
  selector: 'app-retailer-home',
  templateUrl: './retailer-home.component.html',
  styleUrls: ['./retailer-home.component.css']
})
export class RetailerHomeComponent implements OnInit {
  ngzone: NgZone;
  router: Router;


  constructor(ngzone:NgZone, router:Router) {
    this.ngzone=ngzone;
    this.router=router;
   }

  ngOnInit(): void {
  if(localStorage.getItem("TType")=="Retailer"){
    alert("retailer page loaded")
  }
  else{alert("You are not a Authorized retailer please enter correct credentials")
  this.ngzone.run(()=>this.router.navigateByUrl('/Login'));}


  }

}
