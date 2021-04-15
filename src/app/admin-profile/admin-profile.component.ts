import { Component, OnInit } from '@angular/core';
import {FormsModule,NgForm,FormGroup} from '@angular/forms';
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
  constructor(svc:AdminInfoServiceService) {this.svc=svc; }

  ngOnInit(): void {
    this.svc.GetRetailors().subscribe((data:AdminInfoModuleModule[])=>{
      this.rellist=data;
      console.log(this.rellist);
    });
  }
  RegisterData(regform:NgForm):void{
    console.log(regform.value);
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
