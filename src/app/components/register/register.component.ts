import { Component, OnInit } from '@angular/core';
import {FormsModule,NgForm,FormGroup} from '@angular/forms';
import {UserInfoModule} from '../../modules/user-info/user-info.module';
import { UserInfoService } from '../../services/user-info.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model:any=[];
  CusUser=new UserInfoModule;
  RetUser=new UserInfoModule;
  svc:UserInfoService;


  
  constructor(svc:UserInfoService) { 
    this.svc=svc;
  }

  ngOnInit(): void {
  }
  RegisterData(regform:NgForm):void{
    console.log(regform.value);
   // Customer_ID =regform.value.id;
  this.CusUser.Customer_Name =regform.value.name;
  this.CusUser.Customer_ContactNo =regform.value.mno;
  this.CusUser.Customer_Address =regform.value.address;
  this.CusUser.Customer_Country =regform.value.country;
  this.CusUser.Customer_State=regform.value.state;
  this.CusUser.Customer_City =regform.value.city;
  this.CusUser.Customer_PostalCode=regform.value.code;
  this.CusUser.Customer_Email =regform.value.txtemail;
  this.CusUser.Customer_Password =regform.value.txtpass;
  this.CusUser.Customer_Type =regform.value.Type;
  // Customer_ID =regform.value.id;
  this.RetUser.Retailer_Name=regform.value.name;
  this.RetUser.Retailer_ContactNo =regform.value.mno;
  this.RetUser.Retailer_Address =regform.value.address;
  this.RetUser.Retailer_Country =regform.value.country;
  this.RetUser.Retailer_State=regform.value.state;
  this.RetUser.Retailer_City =regform.value.city;
  this.RetUser.Retailer_PostalCode=regform.value.code;
  this.RetUser.Retailer_Email =regform.value.txtemail;
  this.RetUser.Retailer_Password =regform.value.txtpass;
  this.RetUser.Customer_Type =regform.value.Type;
  alert(this.CusUser.Customer_Type);
  if(this.CusUser.Customer_Type=="Customer"){
    
    this.svc.InsertCustomer(this.CusUser).subscribe((data : boolean)=>{
      if(data==true)
      {
     alert('New Customer Registered');
     regform.reset();
      }
      });}
    
    else{

        this.svc.InsertCustomer1(this.RetUser).subscribe((data : boolean)=>{
          if(data==true)
          {
         alert('New Retailer Registered');
         regform.reset();


          }
          });}



  }

}
