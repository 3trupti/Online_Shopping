import { Component, OnInit,NgZone } from '@angular/core';
import {FormsModule,NgForm,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { AdminInfoModuleModule } from '../Modules/admin-info-module/admin-info-module.module';
import { AdminInfoServiceService } from '../services/admin-info-service.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  model:any=[];
  svc: AdminInfoServiceService;
  rellist: AdminInfoModuleModule [];
  ngzone: NgZone;
  router: Router;
  constructor(svc:AdminInfoServiceService,ngzone:NgZone, router:Router) {
    this.svc=svc;
    this.ngzone=ngzone;
    this.router=router;
   }

  ngOnInit(): void {
    localStorage.setItem("reload","false");

    {if(localStorage.getItem("Email")=="Admin1234@gmail.com"){
    this.svc.GetRetailors().subscribe((data:AdminInfoModuleModule[])=>{
      this.rellist=data;
      console.log(this.rellist);
    })}
    else{
      alert("You are Not Authorized to use this page");
      this.ngzone.run(()=>this.router.navigateByUrl('/Login'));



    }
  };
    
  }

  
  RegisterData(regform:NgForm):void{
    console.log(regform.value);
  }
  AddRetailer():void{

    this.ngzone.run(()=>this.router.navigateByUrl('/Register'));


  }




  delete(id:number):void{
    this.svc.DeleteRetailer(id).subscribe((data:boolean)=>
    {
      if(data==true)
      {
        alert('deleted successfull');
        location.reload();
      }
      else
      {
        alert('deleted successfull');
      }
    }
    );
  }


}

